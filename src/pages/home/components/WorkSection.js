import { Container, Row, Col, Card } from "react-bootstrap";
//import { Card } from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";
import { BiPlus } from "react-icons/bi";

function WorkSection() {
	const isMobile = useMediaQuery({ query: `(max-width: 1140px)` });

	return (
		<>
			{!isMobile ? (
				<Container className="pt-5 container">
					<Row>
						<h1 className="text-center pt-5 pb-5">A Selection of my work</h1>
					</Row>
					<Row style={{ height: "375px", marginBottom: "15px" }}>
						<Col md={6}>
							<Card
								className="card"
								style={{
									backgroundImage: "url('/images/Desktop/cheetah-cover.png')",
								}}
							>
								<Card.Body>
									<Card.Title className="card-title">
										Cheetah Atletic
									</Card.Title>
									<Card.Text className="card-text">Logo design</Card.Text>
									<BiPlus className="plus" />
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card
								className="card"
								style={{
									backgroundImage: "url('/images/Desktop/trekker-cover.png')",
								}}
							>
								<Card.Body>
									<Card.Title className="card-title">Trekker</Card.Title>
									<Card.Text className="card-text">UI/UX Design</Card.Text>
									<BiPlus className="plus" />
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row style={{ height: "375px" }}>
						<Col md={6}>
							<Card
								className="card"
								style={{
									backgroundImage: "url('/images/Desktop/ecoenergy-cover.png')",
								}}
							>
								<Card.Body>
									<Card.Title className="card-title">Ecco Energy</Card.Title>
									<Card.Text className="card-text">Logo Design</Card.Text>
									<BiPlus className="plus" />
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card
								className="card"
								style={{
									backgroundImage:
										"url('/images/Desktop/mindfulsouls-cover.png')",
								}}
							>
								<Card.Body className="card-body">
									<Card.Title className="card-title">Mindful Sould</Card.Title>
									<Card.Text className="card-text">Website redesign</Card.Text>
									<BiPlus className="plus" />
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			) : (
				<Container>
					<Row>
						<Col>Col1 mobile</Col>
					</Row>
				</Container>
			)}
		</>
	);
}

export default WorkSection;
