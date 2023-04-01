import { useState } from "react";
import { Modal, ProgressBar } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";

function ModalOverlay({ showModal, handleCloseModal, title, content }) {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const handleScroll = (event) => {
		const { scrollTop, scrollHeight, clientHeight } = event.target;
		const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
		setScrollPercentage(percent);
	};

	return (
		<>
			<Modal
				className="modal"
				fullscreen
				show={showModal}
				onHide={handleCloseModal}
				onScroll={handleScroll}
			>
				{/* <Modal.Header className="header" closeButton></Modal.Header> */}

				<Modal.Body className="body">
					{content === "Content for Cheetah Atletic modal" && (
						<div
							className="main-div"
							style={{ display: "flex", flexDirection: "row" }}
						>
							<div className="cheetah">
								<div className="helpers">
									<ProgressBar
										now={scrollPercentage}
										label={`${Math.round(scrollPercentage)}%`}
										className="progress-bar"
									/>
									<BiPlus onClick={handleCloseModal} className="plusic" />
								</div>
							</div>
							<div>
								<div className="contents">
									<h1>Unleashe Your inner Athlete</h1>
									<h6>
										Cheetah Athletics is a sports and apparel club that provides
										everything you need to achieve your sports & fitness goals.
										It pushes people to live an active and healthy lifestyle by
										training, eating and wearing better.
									</h6>
								</div>
							</div>
						</div>
					)}
					{content === "Content for Trekker modal" && (
						<div>
							<h3>Trekker Modal</h3>
							<p>Description of Trekker modal</p>
							<img src="/images/Desktop/trekker-cover.png" alt="Trekker" />
						</div>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
}
export default ModalOverlay;
