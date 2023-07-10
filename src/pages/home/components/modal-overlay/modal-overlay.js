import { useState } from "react";
import { Modal, ProgressBar } from "react-bootstrap";
import { TbX } from "react-icons/tb";
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
									<div className="close-btn">
										<TbX onClick={handleCloseModal} className="plusic" />
									</div>
								</div>
							</div>

							<div className="contents">
								<div className="section-1">
									<h1>Unleash Your inner Athlete</h1>
									<p>
										Cheetah Athletics is a sports and apparel club that provides
										everything you need to achieve your sports & fitness goals.
										It pushes people to live an active and healthy lifestyle by
										training, eating and wearing better.
									</p>
								</div>
								<div className="section-2">
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
								<div className="section-3">
									<div className="images-row">
										<div className="image1"></div>
										<div className="image2"></div>
										<div className="image3"></div>
									</div>
									<p className="section-3-paragraph">
										The logo is created by combining a cheetah silhouette, with
										the lettermarks enclosed in a circular shape. The circle
										represents stability, continuity and perseverance.
									</p>
								</div>
								<div className="section-4">
									<div className="section-4-text">
										<h2>Train good.</h2>
										<h2>Eat good.</h2>
										<h2>Look good.</h2>
									</div>

									<div className="section-4-images-row">
										<div className="section-4-image-1"></div>
										<div className="section-4-image-2"></div>
										<div className="section-4-image-3"></div>
									</div>
								</div>
								<div className="section-5">
									<div className="section-5-images-row">
										<div className="image-top"></div>
										<div className="image-bottom"></div>
									</div>
									<p>
										Cheetah Athletics is a sports and apparel club that provides
										everything you need to achieve your sports & fitness goals.
									</p>
								</div>
								<div className="section-6">
									<div className="section-6-top-row">
										<h2>
											<span>Perfect fit</span> and harmony between sports and
											technology
										</h2>
										<p>Cheetah Athletics is a sports and apparel club.</p>
									</div>
									<div className="section-6-image-row"></div>
								</div>
								<div className="section-7">
									<div className="section-7-top-row">
										<div className="top-image-7"></div>
									</div>
									<div className="section-7-bottom-row">
										<div className="image-left"></div>
										<div className="image-right"></div>
									</div>
								</div>
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
