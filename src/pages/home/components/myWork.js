import {Col, Container, Image, Row} from "react-bootstrap";
import {useState} from "react";
import {BiPlus} from "react-icons/bi";

function MyWork() {

    const [showAbout, setShowAbout] = useState(false)
    const [showSkill, setShowSkill] = useState(false)

    function openAbout() {
        setShowAbout(
            !showAbout,
        )
    }

    function openSkill() {
        setShowSkill(
            !showSkill,
        )
    }

    return (
        <Container>
            <h1 className="text-center my-5 pt-4">Hi, nice to meet ya! 👋 </h1>
            <Row>
                <Col md={7}>
                    <div className="image-container-right">
                        <Image fluid={true} src='/images/unsplash_fd6K_OFlnRA-1.png' className="w-100 h-100" alt=""/>
                        <h3 className="img-text-left">My work</h3>
                    </div>
                    {/*src='/images/unsplash_fd6K_OFlnRA-1.png'*/}

                </Col>
                <Col md={5}>
                    <div className="d-flex flex-column justify-content-between">
                        <div className="image-container-left">
                            <Image fluid={true} src='/images/unsplash_fd6K_OFlnRA-1.png' className="w-100 h-100"
                                   alt=""/>
                            <h3 className="img-text-right">About me</h3>
                            <BiPlus onClick={openAbout}
                                    id={1}
                                    name='about'
                                    className={`more-info-icon ${showAbout && 'active-more'} `}/>
                            <div className={`moreAbout ${showAbout && 'active-about'}`}>
                                <p className="h-100 d-flex align-items-center p-3">I'm Miloš, digital designer and
                                    content
                                    creator based in Bosnia &
                                    Herzegovina.I
                                    started off as a graphic designer, but
                                    now i do a mix of everthing, from web/design and development to media production and
                                    much,
                                    much more. I'm also a big fan of sports.</p>
                            </div>
                        </div>
                        <div className="image-container-left mt-4">
                            <Image fluid={true} src='/images/unsplash_fd6K_OFlnRA-1.png' className="w-100 h-100"
                                   alt=""/>
                            <h3 className="img-text-right">My skills</h3>
                            <BiPlus
                                id={2}
                                name='skills'
                                onClick={openSkill}
                                className={`more-info-icon ${showSkill && 'active-more'} `}/>
                            <div
                                className={`moreSkill ${showSkill && 'active-skill h-100 d-flex align-items-center p-3 '}`}>
                                <p className="badge">video editing</p>
                                <p className="badge"> branding</p>
                                <p className="badge"> ui/ux</p>
                                <p className="badge"> web design</p>
                                <p className="badge"> motion graphics</p>
                                <p className="badge"> photo manipulation</p>
                                <p className="badge"> development</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MyWork