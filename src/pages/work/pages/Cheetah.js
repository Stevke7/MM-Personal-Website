import {Col, Container, Image, Row} from "react-bootstrap";
import {BsArrowRight} from "react-icons/bs";

function Cheetah() {
    return (
        <>

            <Container className="px-5 ">
                <div className="row ">
                    <div className="d-flex justify-content-center my-5">
                        <h1>Cheetah Athletics</h1>
                    </div>
                    <Col md={8}>
                        <Image className="w-100 radius20" src="/images/cheetah1.png"></Image>
                    </Col>
                    <Col md={4}>
                        <div
                            className=" case-about  w-100 h-100 radius20 d-flex flex-column justify-content-center p-5">
                            <h4 className="text-white case-text ">Cheetah Athletics is a sports and apparel club that
                                provides
                                everything you need to
                                achieve
                                your sports & fitness goals.
                                It pushes people to live an active and healthy lifestyle by training, eating and wearing
                                better. </h4>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Image className="w-100 mt-4 radius20" src="/images/bornToRun.png"></Image>
                    </Col>
                    <div className="my-5 py-5 text-center m-auto w-50">
                        <h3 className="mb-4 text-gradient-orange">Born to run</h3>
                        <p>Cheetahs are the world’s fastest land animal, capable of reaching speeds of up to 70mph. They
                            are built for speed, grace, and hunting. <span
                                className="fw-bold">Cheetah Athletics</span> encompass the spirit of cheetah
                            and live it’s moto - <span className="fw-bold">Born to run!</span></p>
                        <p>The logo is created by combining a cheetah silhouette, with the lettermarks enclosed in a
                            circular shape. The circle represents stability, continuity and perseverance. </p>
                    </div>
                    <Row className="justify-content-between ">
                        <Col md={4}>
                            <Image className="logo-prototype w-100" src="/images/logo-prototype.svg"></Image>
                        </Col>
                        <Col md={8} className=' cheetah-logo '>
                            <Image className=" w-100 py-5 px-5 mt-3 " src="/images/cheetahLogo.svg"></Image>
                            <div className="my-5 text-center">
                                <h3>Font used</h3>
                            </div>
                            <div className=" m-auto gotham-black d-flex align-items-center justify-content-around">
                                <Image src="/images/Group 5394.svg"/>
                                <Image src="/images/Group 5395.svg"/>
                            </div>
                        </Col>
                        <Col md={12} className='pe-0'>
                            <Image className='radius20  w-100 my-5' src="/images/chitah2.png"></Image>
                        </Col>
                        <div className="my-5 py-5 text-center m-auto w-50">
                            <h3><span className='text-gradient-orange'>Perfect fit</span> and harmony
                                between
                                sports and technology</h3>

                        </div>
                        <Col md={12} className='pe-0'>
                            <Image className='radius20  w-100 ' src="/images/videoPlaceholder.png"></Image>
                        </Col>
                        <Col md={4}><Image className='radius20  w-100 my-3 ' src="/images/mockup1.png"></Image></Col>
                        <Col md={4}><Image className='radius20  w-100 my-3 ' src="/images/mockup2.png"></Image></Col>
                        <Col md={4}><Image className='radius20  w-100 my-3 ' src="/images/mockup3.png"></Image></Col>
                        <Col md={6}><Image className='radius20  w-100' src="/images/mockup24.png"></Image></Col>
                        <Col md={6}><Image className='radius20  w-100' src="/images/mockup5.png"></Image></Col>
                        <Col md={12} className='radius20 bg-white my-3 p-5 pb-0'>
                            <div className="text-center my-5"><h3>Black is always in</h3></div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Col md={6} className="me-2n">
                                    <h3 className='text-black text-center mb-5'>Front</h3>
                                    <Image className='radius20 w-100' src="/images/mockup6.png"></Image>
                                </Col>
                                <Col md={6} className="ms-2">
                                    <h3 className='text-black text-center mb-5'>Back</h3>
                                    <Image className='radius20 w-100' src="/images/mockup7.png"></Image>
                                </Col>
                            </div>
                        </Col>
                        <div className="my-5 py-5 w-100 text-center m-auto w-50">
                            <h3> Train good. Eat good. Look good.</h3>
                        </div>
                        <Col md={6}><Image className='radius20  w-100' src="/images/Mask group1.png"></Image></Col>
                        <Col md={6} className="d-flex flex-column justify-content-between">
                            <Image className='radius20 h-48 w-100 ' src="/images/appMockup.png"></Image>
                            <div className='radius20 h-48 w-100 bg-white'>
                                <div
                                    className="d-flex flex-column align-items-center text-center justify-content-center h-100">
                                    <h3>Stay up to date.</h3>
                                    <p className='w-75'>Download our App and stay up to date with the latest news and
                                        workout programs,
                                        tailor-made for you and your needs. Track your workouts, diet and daily fitness
                                        activities.</p>
                                </div>
                            </div>
                        </Col>
                        <div
                            className="my-5 py-5 w-100  w-50 d-flex align-items-center justify-content-center">
                            <h3 className="m-0"> See other projects </h3>
                            <BsArrowRight className="ms-2"/>
                        </div>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Cheetah