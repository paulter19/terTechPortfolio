import { Mail, Github, Linkedin } from 'lucide-react';

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
                        Have a project in mind or want to connect? Send me a message.
                    </p>

                    {/* Contact Form */}
                    <form
                        action="https://formspree.io/f/xyeylbpn"
                        method="POST"
                        className="contact-form"
                    >
                        <div className="contact-form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                rows="6"
                                required
                            />
                        </div>

                        <button type="submit" className="contact-submit">
                            Send Message
                        </button>
                    </form>

                    {/* Contact Icons */}
                    <div className="contact-social">
                        <a
                            href="mailto:paulter17@gmail.com"
                            className="contact-social-link glass"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>

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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
