import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-copyright">
                        © {currentYear} Paul Ter
                    </div>

                    <div className="footer-social">
                        <a
                            href="https://github.com/paulter19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/in/paulter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        {/* <a
                            href="mailto:paul@paulter.dev"
                            className="footer-social-link"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
