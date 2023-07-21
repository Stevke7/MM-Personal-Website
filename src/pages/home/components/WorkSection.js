import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import ModalOverlay from "./modal-overlay/modal-overlay";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import { Link, BrowserRouter as Router, useNavigate } from 'react-router-dom';


const cardsData = [
	{
		id: 1,
		title: "Cheetah Athletics",
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
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState("");
	const [itemsToShow, setItemsToShow] = useState(4); // Number of items to display
	const navigate = useNavigate()

	const handleCloseModal = () => {
		setShowModal(false);
	};
	const handleOpenModal = (content, route) => {

		setModalContent(content);
		// navigate.push(route); // Make sure you have access to 'history' object, which is provided by the 'react-router-dom'
		setShowModal(true);

	};
	const handleLoadMore = () => {
		setItemsToShow(itemsToShow + 4); // Increase the number of items to show by 4
	};
	const allItemsDisplayed = itemsToShow >= cardsData.length; // Check if all items are displayed



	return (
		<>
			<Container id="work" className="container-lg">
				<Row>
					<h1 className="text-center heading-lg pb-5">A Selection of my work</h1>
				</Row>
				<Row >
					{cardsData.slice(0, itemsToShow).map((card) => (
						<Col md={6} className="p-block-12 " key={card.id}>
							<Card className="work-background position-relative"	>
								<Image className="h-100 " src={`${card.image}`} />
								<Card.Body className="position-absolute w-100 h-100 ">
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
				{!allItemsDisplayed && (
					<div className="w-100 d-flex justify-content-center mt-5">
						<Button className="btn-light" onClick={handleLoadMore}> Load more</Button>
					</div>
				)}
				<ModalOverlay
					showModal={showModal}
					handleCloseModal={handleCloseModal}
					content={modalContent}
				/>
			</Container>

		</>
	);
}

export default WorkSection;
