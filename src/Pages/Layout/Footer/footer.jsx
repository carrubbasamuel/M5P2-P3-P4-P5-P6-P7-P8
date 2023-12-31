import { Col, Container, Row } from "react-bootstrap";
import { TiSocialGithubCircular, TiSocialLinkedinCircular, TiSocialTwitter } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoDark from "../../../asset/logo-dark.png";
import logoLight from "../../../asset/logo.png";
import "./footer.css";

export default function Footer() {
    const mode = useSelector((state) => state.root.modeRedux.mode);

    return (
        <footer className="mt-5">
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col className="text-center col-5">
                        <img
                            src={mode === 'light' ? logoLight : logoDark}
                            alt="Logo"
                            className="footer-logo"
                        />
                    </Col>
                </Row>
                <Row className="align-items-center mb-3">

                    <Col md={4} className="text-center fs-2 mb-3">
                        <a href="https://www.linkedin.com/in/samuel-carrubba-562456228/">
                            <TiSocialLinkedinCircular className={`social-icon ${mode === 'light' ? 'text-dark' : 'text-light'}`} />
                        </a>
                        <a href="https://github.com/carrubbasamuel">
                            <TiSocialGithubCircular className={`social-icon ${mode === 'light' ? 'text-dark' : 'text-light'}`} />
                        </a>
                        <a href="https://www.twitter.com">
                            <TiSocialTwitter className={`social-icon ${mode === 'light' ? 'text-dark' : 'text-light'}`} />
                        </a>
                    </Col>

                    <Col md={4} className="text-center">
                        <p className={mode === 'light' ? "text-dark" : "text-light"}>
                            &copy; 2023 Carrubba Samuel
                        </p>
                    </Col>
                    <Col md={4} className={`text-end ${mode === 'light' ? "text-light" : "text-light"}`}>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Link to="/book/404notfound" className={mode === 'light' ? 'text-dark' : 'text-light'}>About</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/book/404notfound" className={mode === 'light' ? 'text-dark' : 'text-light'}>Contact</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/book/404notfound" className={mode === 'light' ? 'text-dark' : 'text-light'}>Term of Services</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/book/404notfound" className={mode === 'light' ? 'text-dark' : 'text-light'}>Privacy Policy</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>



            </Container>
        </footer>
    );
}
