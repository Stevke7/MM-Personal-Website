import { Col, Image, Modal, Row } from "react-bootstrap";

function RequestProject({ nextStep }) {


    return (
        <>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <div className="d-flex flex-column align-items-center justify-content-center h-100 mb-3">
                        <Image className="mb-5" src="/images/hero-img.svg"></Image>
                        <h4 className="mb-3">Request a project</h4>
                        <p className="m-0  text-center text-lg text-gray">
                            This form helps me quickly understand what your project
                            is about and clarifies important questions in advance.
                            Please be as accurate as possible with your
                            information, as it saves us both time.
                        </p>

                    </div>
                </Col>
            </Row>
        </>

    )
}

export default RequestProject