import { useState, useEffect } from 'react';

export default function Background({ children }) {
    const [particles, setParticles] = useState([]);
    const [lines, setLines] = useState([]);

    useEffect(() => {
        // Generate random particles
        const particlesCount = 100;
        const newParticles = [];

        for (let i = 0; i < particlesCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 0.8 + 0.3,
                speedX: (Math.random() - 0.5) * 0.08,
                speedY: (Math.random() - 0.5) * 0.08
            });
        }

        setParticles(newParticles);

        const generateLines = (currentParticles) => {
            const newLines = [];
            for (let i = 0; i < currentParticles.length; i++) {
                for (let j = i + 1; j < currentParticles.length; j++) {
                    const p1 = currentParticles[i];
                    const p2 = currentParticles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 15) {
                        const opacity = 1 - (distance / 15);
                        newLines.push({
                            id: `${i}-${j}`,
                            x1: p1.x,
                            y1: p1.y,
                            x2: p2.x,
                            y2: p2.y,
                            opacity: opacity * 0.5
                        });
                    }
                }
            }
            return newLines;
        };

        const animationInterval = setInterval(() => {
            setParticles(prevParticles => {
                const updatedParticles = prevParticles.map(particle => {
                    let newX = particle.x + particle.speedX;
                    let newY = particle.y + particle.speedY;

                    if (newX < 0 || newX > 100) {
                        particle.speedX *= -1;
                        newX = particle.x + particle.speedX;
                    }

                    if (newY < 0 || newY > 100) {
                        particle.speedY *= -1;
                        newY = particle.y + particle.speedY;
                    }

                    return {
                        ...particle,
                        x: newX,
                        y: newY
                    };
                });

                setLines(generateLines(updatedParticles));
                return updatedParticles;
            });
        }, 50);

        return () => clearInterval(animationInterval);
    }, []);

    return (
        <div className="relative w-full min-h-screen">
            {/* Background SVG */}
            <div className="fixed inset-0 w-full h-full z-0">
                <svg className="w-full h-full bg-gray-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {lines.map(line => (
                        <line
                            key={line.id}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="gray"
                            strokeWidth="0.15"
                            opacity={line.opacity}
                        />
                    ))}
                    {particles.map(particle => (
                        <circle
                            key={particle.id}
                            cx={particle.x}
                            cy={particle.y}
                            r={particle.size / 5}
                            fill="black"
                            opacity="0.7"
                        />
                    ))}
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}