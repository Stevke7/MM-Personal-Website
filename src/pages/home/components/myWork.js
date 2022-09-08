import {Col, Container, Image, Row} from "react-bootstrap";
import {useState} from "react";
import {BiPlus} from "react-icons/bi";
import {useMediaQuery} from "react-responsive";

function MyWork() {

    const [showAbout, setShowAbout] = useState(false)
    const [showSkill, setShowSkill] = useState(false)
    const isMobile = useMediaQuery({query: `(max-width: 1024px)`});

    function openAbout() {
        setShowAbout(prevState => !showAbout)
    }

    function openSkill() {
        setShowSkill(prevState => !showSkill)
    }

    return (
        <>
            {!isMobile ?
                <Container className="px-5">
                    <h1 className="text-center my-5 ">Hi, nice to meet ya! 👋 </h1>
                    <Row className=''>
                        <Col md={7}>
                            <div className="image-container-right ">
                                <Image fluid={true} src='/images/work-img .png' className="w-100 " alt=""/>
                                <h3 className="img-text-left">My work</h3>
                            </div>
                        </Col>
                        <Col md={5} className=' '>
                            <div className="d-flex flex-column justify-content-between h-100">
                                <div onClick={openAbout} className="image-container-left  h-48  cursor-pointer  ">
                                    <Image fluid={true} src='/images/aboutMe.png' className="h-100 "
                                           alt=""/>
                                    <h3 className="img-text-right">About me</h3>
                                    <BiPlus onClick={openAbout}
                                            id={1}
                                            name='about'
                                            className={`more-info-icon ${showAbout && 'active-more'} `}/>
                                    <div className={`moreAbout ${showAbout && 'active-about'}`}>
                                        <p className="d-flex align-items-center p-3">I'm Miloš, digital designer and
                                            content
                                            creator based in Bosnia &
                                            Herzegovina.I
                                            started off as a graphic designer, but
                                            now i do a mix of everthing, from web/design and development to media
                                            production and
                                            much,
                                            much more. I'm also a big fan of sports.</p>
                                    </div>
                                </div>
                                <div onClick={openSkill} className="image-container-left  h-48  cursor-pointer  ">
                                    <Image fluid={true} src='/images/skils-img.png' className="h-100 w-100 "
                                           alt=""/>
                                    <h3 className="img-text-right">My skills</h3>
                                    <BiPlus
                                        id={2}
                                        name='skills'
                                        onClick={openSkill}
                                        className={`more-info-icon ${showSkill && 'active-more'} `}/>
                                    <div className={`moreSkill  ${showSkill && 'active-skill  '}`}>
                                        <div className="d-flex flex-wrap  ">
                                            <div className="badge">Web Design</div>
                                            <div className="badge">3D</div>
                                            <div className="badge"> UI/UX Design</div>
                                            <div className="badge"> Motion graphics</div>
                                            <div className="badge"> Illustration</div>
                                            <div className="badge"> Branding</div>
                                            <div className="badge"> Logo Design</div>
                                            <div className="badge"> Web Development</div>
                                            <div className="badge"> Video editing</div>
                                            <div className="badge"> Photo manipulation</div>
                                            <div className="badge"> Figma</div>
                                            <div className="badge"> Adobe Creative Suite</div>
                                            <div className="badge"> Webflow</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>


                    </Row>
                    <Col md={12}>
                        <div
                            className="bg-primary-darker align-items-center h-100 radius20 mt-5 d-flex flex-md-column flex-lg-row align-items-center justify-content-between ">
                            <div className=" w-77 position-relative">
                                <p className="f-27 px-5 work-info w-100">
                                    <span className="fw-bold">I’m a digital designer and creator.</span>
                                    <br/>
                                    Designing digital
                                    products
                                    and experiences, I help brands
                                    stand out in the digital era.
                                </p>
                                <div className="checkoutMyWork ">
                                    <Image className="myWork-img" src='/icons/Arrow.svg'></Image>
                                    <p>Check out <br/> my artwork</p>
                                </div>
                            </div>
                            <div className=' '>
                                <Image className="myWork-img h-100 w-100 " src='/images/Group 4.png'></Image>
                            </div>
                        </div>
                    </Col>
                </Container>
                :
                <Container>
                    <h3 className="text-center my-5 ">Hi, nice to meet ya! 👋 </h3>
                    <Row>
                        <Col className='h-100' lg={7}>
                            <div className="image-container-right h-100">
                                <Image fluid={true} src='/images/work-img .png' className="w-100 h-100" alt=""/>
                                <h6 className="img-text-left">My work</h6>
                            </div>
                            {/*src='/images/unsplash_fd6K_OFlnRA-1.png'*/}

                        </Col>
                        <Col lg={5} className='h-100 '>
                            <div className="d-flex flex-column h-100 justify-content-between">
                                <div onClick={openAbout} className="image-container-left cursor-pointer my-3 ">
                                    <Image fluid={true} src='/images/aboutMe.png' className="w-100 h-100"
                                           alt=""/>
                                    <h6 className="img-text-right">About me</h6>
                                    <BiPlus onClick={openAbout}
                                            id={1}
                                            name='about'
                                            className={`more-info-icon ${showAbout && 'active-more'} `}/>
                                    <div className={`moreAbout ${showAbout && 'active-about'}`}>
                                        <p className="d-flex align-items-center p-3">I'm Miloš, digital designer and
                                            content
                                            creator based in Bosnia &
                                            Herzegovina.I
                                            started off as a graphic designer, but
                                            now i do a mix of everthing, from web/design and development to media
                                            production and
                                            much,
                                            much more. I'm also a big fan of sports.</p>
                                    </div>
                                </div>
                                <div onClick={openSkill} className="image-container-left cursor-pointer  ">
                                    <Image fluid={true} src='/images/skils-img.png' className="w-100 h-100"
                                           alt=""/>
                                    <h6 className="img-text-right">My skills</h6>
                                    <BiPlus
                                        id={2}
                                        name='skills'
                                        onClick={openSkill}
                                        className={`more-info-icon ${showSkill && 'active-more'} `}/>
                                    <div className={`moreSkill  ${showSkill && 'active-skill  '}`}>
                                        <div className="d-flex flex-wrap  ">
                                            <div className="badge">Web Design</div>
                                            <div className="badge">3D</div>
                                            <div className="badge"> UI/UX Design</div>
                                            <div className="badge"> Motion graphics</div>
                                            <div className="badge"> Illustration</div>
                                            <div className="badge"> Branding</div>
                                            <div className="badge"> Logo Design</div>
                                            <div className="badge"> Web Development</div>
                                            <div className="badge"> Video editing</div>
                                            <div className="badge"> Photo manipulation</div>
                                            <div className="badge"> Figma</div>
                                            <div className="badge"> Adobe Creative Suite</div>
                                            <div className="badge"> Webflow</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>


                    </Row>
                    <Col md={12}>
                        <div
                            className="bg-primary  h-100 radius20 mt-4  ">
                            <div className=" position-relative">
                                <p className="p-3 work-info w-100">
                                    <span className="fw-bold">I’m a digital designer and creator.</span>
                                    <br/>
                                    Designing digital
                                    products
                                    and experiences, I help brands
                                    stand out in the digital era.
                                </p>
                                <div className="checkoutMyWork ">
                                    <Image src='/icons/checkOut-mobile.png'></Image>
                                </div>
                            </div>
                            <div className='h-100 w-100 '>
                                <Image className="myWork-img" src='/icons/Images-group-mobile.png'></Image>
                            </div>
                        </div>
                    </Col>
                </Container>
            }
        </>

    )
}

export default MyWork