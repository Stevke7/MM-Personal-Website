import { useEffect, useRef, useState } from "react";
import { Col, Container, Image, Modal, ProgressBar, Row } from "react-bootstrap";
import { TbX } from "react-icons/tb";
import { BiPlus } from "react-icons/bi";

function ModalOverlay({ showModal, handleCloseModal, title, content, setShowModal }) {
	const [scrollPercentage, setScrollPercentage] = useState(0);
	const scrollerContainer = useRef(null);
	const screenWidth = window.innerWidth;
	const isMobile = screenWidth <= 550;
	const touchX = useRef(0);


	const handleScroll = (e) => {
		e.preventDefault();
		const container = scrollerContainer.current;
		const delta = e.type === "wheel" ? e.deltaY : e.touches[0].clientX - touchX;
		container.scrollLeft += delta;
	
		// Calculate the scrolling progress and update the state
		const { scrollLeft, scrollWidth, clientWidth } = container;
		const percent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
		setScrollPercentage(percent);
	  };
	
	  useEffect(() => {
		const container = scrollerContainer.current;
	
		if (container) {
		  container.addEventListener("wheel", handleScroll, { passive: false });
		  container.addEventListener("touchstart", (e) => {
			touchX = e.touches[0].clientX;
		  }, { passive: true });
		  container.addEventListener("touchmove", handleScroll, { passive: false });
		}
	
		return () => {
		  if (container) {
			container.removeEventListener("wheel", handleScroll);
			container.removeEventListener("touchstart", (e) => {
			  touchX = e.touches[0].clientX;
			});
			container.removeEventListener("touchmove", handleScroll);
		  }
		};
	  }, []);

	return (
		<>
			<Modal
				className="modal project-overlay"
				fullscreen
				show={showModal}
				onHide={handleCloseModal}
			>
				<Modal.Body style={{ padding: 0 }}>
					{content === "Content for Cheetah Atletic modal" && (
						<Container ref={scrollerContainer} onWheel={handleScroll} fluid className="scroller-container">
							<div className="scroller-element featured-section">
								<Image className="w-100 h-100 featured-image" src="images/bornToRunCroped.png">

								</Image>
								<h1 className="text-white">Born to run</h1>
								<div className="helpers">
									<ProgressBar now={100} className="progress-bar">
										<div
											className="progress-bar-bg"
											style={{ width: `${scrollPercentage}%` }}
										/>
									</ProgressBar>
									<div className="close-btn">
										<TbX onClick={handleCloseModal} className="plusic" />
									</div>
								</div>
							</div>
							<div className="scroller-element section-1">
								<h1 className="linear-gradient">Unleash Your <br /> inner Athlete</h1>
								<p>
									Cheetah Athletics is a sports and apparel club that provides
									everything you need to achieve your sports & fitness goals.
									It pushes people to live an active and healthy lifestyle by
									training, eating and wearing better.
								</p>
							</div>
							<div className="scroller-element section-2">
								<p>
									Cheetahs are the world’s fastest land animal, capable of
									reaching speeds of up to 70mph. They are built for speed,
									grace, and hunting. <span className="text-white">Cheetah Athletics encompass the spirit
										of cheetah and live it’s moto - Born to run!</span>
								</p>
								<Image className="cheetah-img" src={` ${isMobile ? 'images/cheetah-mobile-1.png ' : 'images/cheetah2.png'}`} />


							</div>
							<div className="scroller-element section-3">
								<Row className="images-row">
									<Col xs={4} >
										<Image className="w-100 h-100" src={`${isMobile ? 'images/cheetah-mobile-2.png' : 'images/chetah-overlay-1.png'}`} />
									</Col>
									<Col xs={4} >
										<Image className="w-100 h-100" src={`${isMobile ? ' images/cheetah-mobile-3.png' : 'images/chetah-overlay-2.png'}`} />
									</Col>
									<Col xs={4} >
										<Image className="w-100 h-100" src={`${isMobile ? ' images/cheetah-mobile-4.png' : 'images/chetah-overlay-3.png'}`} />
									</Col>
								</Row>
								<p className="mt-4">
									The logo is created by combining a cheetah silhouette, with
									the lettermarks enclosed in a circular shape. The circle
									represents stability, continuity and perseverance.
								</p>

							</div>
							<div className="scroller-element section-4">
								<div className="section-4-text">
									<h2>Train good.</h2>
									<h2>Eat good.</h2>
									<h2>Look good.</h2>
								</div>

								<div className="d-flex mt-4">
									<Image className="w-100 h-100" src={`${isMobile ? 'images/cheetah-mobile-5.png' : 'images/bottle-4.png'}`} />
									<Image className="w-100 h-100 mx-3" src={`${isMobile ? 'images/cheetah-mobile-6.png' : 'images/bottle-5.png'}`} />
									<Image className="w-100 h-100" src={`${isMobile ? 'images/cheetah-mobile-7.png' : 'images/bottle-6.png'}`} />
								</div>
							</div>
							<div className="scroller-element  section-5">
								{isMobile ? <div className="d-flex flex-column justify-content-c"  >
									<Image src="images/cheetah-mobile-8.png" />
									<Image className="mt-4" src="images/cheetah-mobile-10.png" />
								</div> : <Image src="images/cheetah-majice.png" />}
								<p className="mt-5">
									Cheetah Athletics is a sports and apparel club that provides
									everything you need to achieve your sports & fitness goals.
								</p>

							</div>
							<div className="scroller-element h-100">
								<div className="section-6-top-row mt-lg-5 pt-lg-5 ">
									<h2>
										<span className="linear-gradient">Perfect fit</span> and harmony between sports and
										technology
									</h2>
									<p>Cheetah Athletics is a sports and apparel club.</p>
								</div>
								<Image className=" d-flex justify-content-end align-items-end  mt-5"
									src={`${isMobile ? 'images/cheetah-mobile-11.png' : 'images/chetah-majica-7.png'}`}
								/>

							</div>
							<div className="scroller-element margin-right-120 section-7">
								<Row className=" flex-row justify-content-start align-items-center ">
									<Col md={12}><Image className="w-100" src={`${isMobile ? 'images/cheetah-mobile-12.png' : 'images/section-7-top.png'}`} /></Col>
									<Col xs={6} className="mt-4">
										<Image className="w-100" src={`${isMobile ? 'images/cheetah-mobile-13.png' : 'images/section-7-bottom-1.png'}`} />
									</Col>
									<Col xs={6} className="mt-4">
										<Image className="w-100" src={`${isMobile ? 'images/cheetah-mobile-14.png' : 'images/section-7-bottom-2.png'}`} />
									</Col>
								</Row>
							</div>



						</Container>
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
