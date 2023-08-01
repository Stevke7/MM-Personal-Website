import { Col, Form, Row } from "react-bootstrap";

export function Step1({ checkboxHandler, data, nextStep, }) {

    return (
        <>
            <Row className="flex-column align-items-center justify-content-center">
                <Col xs={12} md={6}>
                    <h4 className="mb-3  text-center">Which service
                        <br />do you need?</h4>
                    <Form.Check
                        onChange={checkboxHandler}
                        defaultChecked={data.webDesign}
                        id='Web / UI Design'
                        name="webDesign"
                        type="checkbox"
                        label="Web / UI Design"
                        className="cursor-pointer"
                    />
                    <Form.Check
                        onChange={checkboxHandler}
                        defaultChecked={data.logoDesign}
                        id='Logo Design / Branding'
                        name="logoDesign"
                        type="checkbox"
                        label="Logo Design / Branding"
                        className="cursor-pointer my-3"
                    />
                    <Form.Check
                        onChange={checkboxHandler}
                        defaultChecked={data.graphicDesign}
                        id='Graphic Design'
                        name="graphicDesign"
                        type="checkbox"
                        label="Graphic Design"
                        className="cursor-pointer"
                    />
                </Col>

            </Row>

        </>

    )
}
