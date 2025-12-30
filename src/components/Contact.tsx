import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-content">
                    <p className="section-label">Get in Touch</p>
                    <h2 className="section-title gradient-text">
                        Let's build something together
                    </h2>

                    <p className="contact-description">
                        {/*  Got a project in mind? I'm always open to discussing new opportunities,
                        interesting ideas, or just having a chat about tech. */}
                    </p>

                    {/*  <a href="mailto:paul@paulter.dev" className="contact-email">

                        <ArrowUpRight size={24} className="contact-email-arrow" />
                    </a> */}

                    <div className="contact-social">
                        <a
                            href="https://github.com/paulter19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-link glass"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/paulter19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-link glass"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        {/* <a
                            href="mailto:paul@paulter.dev"
                            className="contact-social-link glass"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
