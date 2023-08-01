import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import ModalOverlay from "./modal-overlay/modal-overlay";
import { BiPlus } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import cardsData from '../../../mock/cardData.json';


function WorkSection(props) {
	const { theme } = props
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState("");
	const [itemsToShow, setItemsToShow] = useState(4); // Number of items to display
	const modalIdRef = useRef(""); // Ref to store the ID for the modal content
	const [modalId, setModalId] = useState(""); // ID for the modal content

	const allItemsDisplayed = itemsToShow >= cardsData.length; // Check if all items are displayed

	const handleCloseModal = () => {
		setShowModal(false);
		window.history.replaceState(null, null, "#"); // Remove the hash route when the modal is closed

	};
	const handleOpenModal = (content, id) => {

		setModalContent(content);
		setModalId(id); // Set the ID for the modal content
		setShowModal(true);
		window.location.hash = `#${id}`; // Set the hash route when the modal is opened
		// Use setTimeout to ensure the modal opens after the hash change is detected
		setTimeout(() => {
			setShowModal(true);
		}, 0);
	};
	const handleLoadMore = () => {
		setItemsToShow(itemsToShow + 4); // Increase the number of items to show by 4
	};

	useEffect(() => {
		const handleHashChange = () => {
			if (window.location.hash !== `#${modalIdRef.current}`) {
				setShowModal(false); // Close the modal if the hash route changess
			}
		};
		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);
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
								<Image className="h-100 " src={card.image} />
								<Card.Body className="position-absolute w-100 h-100 ">
									<Card.Title className="card-title">{card.title}</Card.Title>
									<Card.Text className="card-text">
										{card.description}
									</Card.Text>
									<BiPlus
										className="work-plus"
										onClick={() => handleOpenModal(card.modalContent.content, card.title)}
									/>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
				{!allItemsDisplayed && (
					<div className="w-100 d-flex justify-content-center mt-5">
						<Button className={`${theme === "light" ? 'btn-light' : 'btn-dark'}`} onClick={handleLoadMore}> Load more</Button>
					</div>
				)}
				<ModalOverlay
					cardsData={cardsData}
					showModal={showModal}
					setShowModal={setShowModal}
					handleCloseModal={handleCloseModal}
					content={modalContent}
				/>
			</Container>

		</>
	);
}

export default WorkSection;
