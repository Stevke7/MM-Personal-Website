import {Col, Container, Image} from "react-bootstrap";

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
                        <div className="bg-orange w-100 h-100 radius20 d-flex flex-column justify-content-center p-5">
                            <h4 className="text-white">Cheetah Athletics is a sports and apparel club that provides
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
                </div>
            </Container>
        </>
    )
}

export default Cheetah