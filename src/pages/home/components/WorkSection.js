import { Container, Row, Col, Card } from "react-bootstrap";
import ModalOverlay from "./modal-overlay/modal-overlay";
import { useMediaQuery } from "react-responsive";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";

const cardsData = [
	{
		id: 1,
		title: "Cheetah Atletic",
		description: "Logo design",
		image: "/images/Desktop/cheetah-cover.png",
		modalContent: "Content for Cheetah Atletic modal",
	},
	{
		id: 2,
		title: "Trekker",
		description: "UI/UX Design",
		image: "/images/Desktop/trekker-cover.png",
		modalContent: "Content for Trekker modal",
	},
	{
		id: 3,
		title: "Ecco Energy",
		description: "Logo Design",
		image: "/images/Desktop/ecoenergy-cover.png",
		modalContent: "Content for Ecco Energy modal",
	},
	{
		id: 4,
		title: "Mindful Sould",
		description: "Website redesign",
		image: "/images/Desktop/mindfulsouls-cover.png",
		modalContent: "Content for Mindful Sould modal",
	},
];

function WorkSection() {
	const isMobile = useMediaQuery({ query: `(max-width: 1140px)` });

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState("");

	const handleCloseModal = () => {
		setShowModal(false);
	};
	const handleOpenModal = (content) => {
		setShowModal(true);
		setModalContent(content);
	};

	return (
		<>
			{!isMobile ? (
				<Container className="pt-5 container">
					<Row>
						<h1 className="text-center pt-5 pb-5">A Selection of my work</h1>
					</Row>
					<Row style={{ height: "375px", marginBottom: "15px" }}>
						{cardsData.slice(0, 2).map((card) => (
							<Col md={6} key={card.id}>
								<Card
									className="card"
									style={{
										backgroundImage: `url(${card.image})`,
									}}
								>
									<Card.Body>
										<Card.Title className="card-title">{card.title}</Card.Title>
										<Card.Text className="card-text">
											{card.description}
										</Card.Text>
										<BiPlus
											className="work-plus"
											onClick={() => handleOpenModal(card.modalContent)}
										/>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
					<Row style={{ height: "375px" }}>
						{cardsData.slice(2).map((card) => (
							<Col md={6} key={card.id}>
								<Card
									className="card"
									style={{
										backgroundImage: `url(${card.image})`,
									}}
								>
									<Card.Body>
										<Card.Title className="card-title">{card.title}</Card.Title>
										<Card.Text className="card-text">
											{card.description}
										</Card.Text>
										<BiPlus
											className="work-plus"
											onClick={() => handleOpenModal(card.modalContent)}
										/>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
					<ModalOverlay
						showModal={showModal}
						handleCloseModal={handleCloseModal}
						content={modalContent}
					/>
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
