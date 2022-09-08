import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function ContactForm() {
	return (
		<section class="mb-4">
			<h2 class="h1-responsive font-weight-bold text-center my-4">
				Let's start a Project Together
			</h2>

			<div class="row">
				<div class="col-md-9 mb-md-0 mb-5">
					<form
						id="contact-form"
						name="contact-form"
						action="mail.php"
						method="POST"
					>
						<div class="row">
							<div class="col-md-6">
								<div class="md-form mb-0">
									<input
										type="text"
										id="name"
										name="name"
										class="form-control"
									></input>
									<label for="name" class="">
										Your name
									</label>
								</div>
							</div>

							<div class="col-md-6">
								<div class="md-form mb-0">
									<input
										type="text"
										id="email"
										name="email"
										class="form-control"
									></input>
									<label for="email" class="">
										Your email
									</label>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-12">
								<div class="md-form mb-0">
									<input
										type="text"
										id="subject"
										name="subject"
										class="form-control"
									></input>
									<label for="subject" class="">
										Subject
									</label>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-12">
								<div class="md-form">
									<textarea
										type="text"
										id="message"
										name="message"
										rows="2"
										class="form-control md-textarea"
									></textarea>
									<label for="message">Your message</label>
								</div>
							</div>
						</div>
					</form>

					<div class="text-center text-md-left">
						<a
							class="btn btn-primary"
							onclick="document.getElementById('contact-form').submit();"
						>
							Send
						</a>
					</div>
					<div class="status"></div>
				</div>

				<div class="col-md-3 text-center"></div>
			</div>
		</section>
	);
}

export default ContactForm;
