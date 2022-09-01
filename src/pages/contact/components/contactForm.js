import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function ContactForm() {
	return (
		<Container>
			<div className="container heading-text my-5">
				<h1 className="text-center my-5">Let's start a project together</h1>
			</div>
			<form className="row">
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="John Doe" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>E-mail</Form.Label>
					<Form.Control type="email" placeholder="youremail@mail.com" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicSubject">
					<Form.Label>Subject</Form.Label>
					<Form.Control type="text" placeholder="Website design, Logo..." />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicMessage">
					<Form.Label>Message</Form.Label>
					<Form.Control type="text" placeholder="Type Your Message" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</form>
		</Container>
	);
}

export default ContactForm;
