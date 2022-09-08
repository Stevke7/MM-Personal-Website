import { Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

function ContactForm() {
	return (
		<Container className="containerContact px-5">
			<div className="w-75 m-auto mt-4">
				<h1 className="text-center my-5">
					Let's start a Project <span className="text-gradient">together</span>
				</h1>
			</div>
			<Row className="flex-column flex-md-row">
				<Col md={9}>
					<div className="contactForm">
						<Box
							component="form"
							sx={{
								"& > :not(style)": { m: 1, width: "75%" },
							}}
							noValidate
							autoComplete="off"
						>
							<FormControl variant="standard" className="mt-4">
								<InputLabel htmlFor="component-simple">Name</InputLabel>
								<Input id="component-simple" placeholder="John Doe" />
							</FormControl>
							<FormControl variant="standard" className="mt-4">
								<InputLabel htmlFor="component-simple">e-mail</InputLabel>
								<Input
									id="component-simple"
									placeholder="youremail@email.com"
								/>
							</FormControl>
							<FormControl variant="standard" className="mt-4">
								<InputLabel htmlFor="component-simple">subject</InputLabel>
								<Input
									id="component-simple"
									placeholder="Website Design, Logo..."
								/>
							</FormControl>
							<FormControl variant="standard" className="mt-4">
								<InputLabel htmlFor="component-simple">Message</InputLabel>
								<Input
									id="standard-multiline-static"
									placeholder="Type Your message here"
									multiline
									rows={4}
								/>
							</FormControl>
						</Box>
						<Button className="sendBtn mt-5" variant="primary" type="submit">
							Submit
						</Button>
					</div>
				</Col>
				<Col md={3}>
					<div className="details">
						<div className="contact-info mt-4">
							<p className="fw-bold">CONTACT DETAILS</p>
							<p className="text-decoration-underline">
								info@milosmiljanovic.com
							</p>
							<p className="text-decoration-underline">+387 65 635 241</p>
						</div>
						<div className="social mt-5">
							<p className="fw-bold ">SOCIAL MEDIA LINKS</p>
							<p className="cursor-pointer">Dribble</p>
							<p className="cursor-pointer">LinkedIn</p>
							<p className="cursor-pointer">Instagram</p>
							<p className="cursor-pointer">Facebook</p>
						</div>
						<Button className="downloadBtn mt-5">Download my CV</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ContactForm;
