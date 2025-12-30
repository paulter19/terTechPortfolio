import { ArrowDown, FileText, Github } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Background gradient orbs */}
            <div className="hero-bg-orb hero-bg-orb-1 animate-glow" />
            <div className="hero-bg-orb hero-bg-orb-2 animate-glow delay-300" />

            {/* Grid pattern overlay */}
            <div className="hero-grid" />

            <div className="container">
                <div className="hero-content">
                    {/* Main headline */}
                    <h1 className="hero-title animate-fade-in-up delay-100">
                        <span className="gradient-text">Paul Ter</span>
                        <br />
                        <span className="hero-title-sub">I build products.</span>
                    </h1>

                    {/* Value proposition */}
                    <p className="hero-description animate-fade-in-up delay-200">
                        Full-stack developer with 5+ years of experience designing web applications,
                        mobile apps, APIs, and automation solutions. Based in Minnesota.
                    </p>

                    {/* CTAs */}
                    <div className="hero-ctas animate-fade-in-up delay-300">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                            <ArrowDown size={18} className="animate-bounce" />
                        </a>
                        <a href="/resume.pdf" download className="btn btn-secondary">
                            <FileText size={18} />
                            Resume
                        </a>
                        <a
                            href="https://github.com/paulter19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <a href="#projects" className="hero-scroll animate-fade-in delay-400">
                <span className="hero-scroll-text">Scroll</span>
                <div className="hero-scroll-line" />
            </a>
        </section>
    );
};

export default Hero;
