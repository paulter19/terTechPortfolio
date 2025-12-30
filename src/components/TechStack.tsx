const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Vue', icon: '💚' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'React Native', icon: '📱' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'SQL', icon: '🗄️' },
];

const TechStack = () => {
    return (
        <section className="section tech-section">
            <div className="container">
                <p className="section-label text-center">Tech I Work With</p>

                <div className="tech-grid">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="tech-item glass">
                            <span className="tech-icon">{tech.icon}</span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
