import {Col, Container, Image, Row} from "react-bootstrap";

function Cheetah() {
    return (
        <>
            <Container className="mx-5">
                <div className="d-flex justify-content-center my-5">
                    <h1>Cheetah Athletics</h1>
                </div>
                <div className="row">
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
                        <Col md={12} className='p-0'>
                            <Image className='radius20  w-100 my-5' src="/images/chitah2.png"></Image>
                        </Col>


                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Cheetah