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
				<Modal.Body style={{ padding: 0 }}>
					{content === "Content for Cheetah Atletic modal" && (
						<div className="main-div">
							<div className="cover">
								<div className="helpers">
									<ProgressBar
										now={scrollPercentage}
										label={`${Math.round(scrollPercentage)}%`}
										className="progress-bar"
									/>
									<BiPlus onClick={handleCloseModal} className="plusic" />
								</div>
							</div>

							<div className="contents">
								<div className="screen-1">
									<div className="frame-1">
										<h1>Unleash Your inner Athlete</h1>
										<p>
											Cheetah Athletics is a sports and apparel club that
											provides everything you need to achieve your sports &
											fitness goals. It pushes people to live an active and
											healthy lifestyle by training, eating and wearing better.
										</p>
									</div>
									<div className="frame-2">
										<p>
											Cheetahs are the world’s fastest land animal, capable of
											reaching speeds of up to 70mph. They are built for speed,
											grace, and hunting. Cheetah Athletics encompass the spirit
											of cheetah and live it’s moto - Born to run!
										</p>
										<div className="image"></div>
									</div>
								</div>
								{/* <div className="screen-2">
									<div className="images-row">
										<div className="image1"></div>
										<div className="image2"></div>
										<div className="image3"></div>
									</div>
									<p>
										The logo is created by combining a cheetah silhouette, with
										the lettermarks enclosed in a circular shape. The circle
										represents stability, continuity and perseverance.
									</p>
								</div> */}
							</div>
						</div>
					)}
					{content === "Content for Trekker modal" && (
						<div>
							<div className="helpers">
								<ProgressBar
									now={scrollPercentage}
									label={`${Math.round(scrollPercentage)}%`}
									className="progress-bar"
								/>
								<BiPlus onClick={handleCloseModal} className="plusic" />
							</div>
							<h3>Trekker Modal</h3>
							<p>Description of Trekker modal</p>
							<img src="/images/Desktop/trekker-cover.png" alt="Trekker" />
						</div>
					)}
					{content === "Content for Ecco Energy modal" && (
						<div>
							<div className="helpers">
								<ProgressBar
									now={scrollPercentage}
									label={`${Math.round(scrollPercentage)}%`}
									className="progress-bar"
								/>
								<BiPlus onClick={handleCloseModal} className="plusic" />
							</div>
							<h3>Ecco Energy Modal</h3>
							<p>Description of Ecco Energy modal</p>
							<img
								src="/images/Desktop/ecoenergy-cover.png"
								alt="Ecco Energy"
							/>
						</div>
					)}
					{content === "Content for Mindful Sould modal" && (
						<div>
							<div className="helpers">
								<ProgressBar
									now={scrollPercentage}
									label={`${Math.round(scrollPercentage)}%`}
									className="progress-bar"
								/>
								<BiPlus onClick={handleCloseModal} className="plusic" />
							</div>
							<h3>Mindful Sould Modal</h3>
							<p>Description of Mindful Sould modal</p>
							<img
								src="/images/Desktop/mindfulsouls-cover.png"
								alt="Mindful Sould"
							/>
						</div>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
}
export default ModalOverlay;
