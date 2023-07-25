import { darken } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Image, Modal, ProgressBar, Row } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";

function ModalOverlay({ showModal, handleCloseModal, content, cardsData }) {
	const [scrollPercentage, setScrollPercentage] = useState(0);
	const scrollerContainer = useRef(null);
	const screenWidth = window.innerWidth;
	const isMobile = screenWidth <= 800;
	const touchX = useRef(0);



	// Define the handleScroll function for mobile and desktop
	const handleScrollMobile = () => {
		const container = scrollerContainer.current;
		if (!container) return;

		// Calculate the scrolling progress and update the state
		const { scrollLeft, scrollWidth, clientWidth } = container;
		const percent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
		setScrollPercentage(percent);
	};


	const handleScrollDesktop = (e) => {
		e.preventDefault();
		const container = scrollerContainer.current;
		const delta = e.type === "wheel" ? e.deltaY : e.touches[0].clientX - touchX.current;
		container.scrollLeft += delta;

		// Calculate the scrolling progress and update the state
		const { scrollLeft, scrollWidth, clientWidth } = container;
		const percent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
		setScrollPercentage(percent);
	};
	const closeModal = () => {
		handleCloseModal()
		setScrollPercentage(0)
	}
	useEffect(() => {
		const container = scrollerContainer.current;

		if (container) {
			if (isMobile) {
				container.addEventListener("scroll", handleScrollMobile, { passive: true });
				container.addEventListener("wheel", handleScrollMobile, { passive: false });
			} else {
				container.addEventListener("scroll", handleScrollDesktop, { passive: true });
				container.addEventListener("wheel", handleScrollDesktop, { passive: false });
				container.addEventListener("touchstart", (e) => {
					touchX.current = e.touches[0].clientX;
				}, { passive: true });
				container.addEventListener("touchmove", handleScrollDesktop, { passive: false });
			}
		}

		return () => {
			if (container) {
				if (isMobile) {
					container.removeEventListener("scroll", handleScrollMobile);
					container.removeEventListener("wheel", handleScrollMobile);
				} else {
					container.removeEventListener("scroll", handleScrollDesktop);
					container.removeEventListener("wheel", handleScrollDesktop);
					container.removeEventListener("touchstart", (e) => {
						touchX.current = e.touches[0].clientX;
					});
					container.removeEventListener("touchmove", handleScrollDesktop);
				}
			}
		};
	}, [isMobile]);

	return (
		<>
			<Modal
				className="modal project-overlay"
				fullscreen
				show={showModal}
				onHide={handleCloseModal}
			>
				<Modal.Body style={{ padding: 0 }}>
					{cardsData.map((data, index) => (
						content === data.modalContent.content && (
							<Container
								ref={scrollerContainer}
								onScroll={handleScrollMobile}
								onWheel={handleScrollDesktop}
								fluid
								className="scroller-container"
							>
								<div className="scroller-element featured-section">
									<Image className="w-100 h-100 featured-image" src={data?.modalContent?.featuredImg}>
									</Image>
									<h1 className="text-white">{data?.modalContent?.mainTitle}</h1>
									<div className="helpers">
										<ProgressBar now={100} className="progress-bar">
											<div
												className="progress-bar-bg"
												style={{ width: `${scrollPercentage}%` }}
											/>
										</ProgressBar>
										<Image onClick={closeModal} src="icons/close.svg" className="cursor-pointer" />
									</div>
								</div>
								{data.modalContent.sectionOne && <div className="scroller-element section-1">
									<h1 className="linear-gradient mb-4">{data?.modalContent?.sectionOne?.title}</h1>
									<p>
										{data?.modalContent?.sectionOne?.text}
									</p>
								</div>}
								{data.modalContent.sectionTwo && <div className="scroller-element section-2">
									<p>
										{data?.modalContent?.sectionTwo.text}
										<span className="text-white ms-2">{data?.modalContent?.sectionTwo?.whiteText}
										</span>
									</p>
									<Image className="cheetah-img" src={` ${isMobile ? data?.modalContent?.sectionTwo.mobileImage : data.modalContent.sectionTwo.image}`} />
								</div>}
								{data?.modalContent?.sectionThree && <div className="scroller-element section-3">
									<Row className="images-row">
										<Col xs={4} >
											<Image className="w-100 h-100" src={`${isMobile ? data?.modalContent?.sectionThree?.imageOneMobile : data?.modalContent?.sectionThree?.imageOne}`} />
										</Col>
										<Col xs={4} >
											<Image className="w-100 h-100" src={`${isMobile ? data?.modalContent?.sectionThree?.imageTwoMobile : data?.modalContent?.sectionThree?.imageTwo}`} />
										</Col>
										<Col xs={4} >
											<Image className="w-100 h-100" src={`${isMobile ? data?.modalContent?.sectionThree?.imageThreeMobile : data?.modalContent?.sectionThree?.imageThee}`} />
										</Col>
									</Row>
									<p className="mt-4">
										{data?.modalContent?.sectionThree.text}
									</p>

								</div>}
								{data.modalContent.sectionFour && <div className="scroller-element section-4">
									<div className="section-4-text">
										<h2>{data?.modalContent?.sectionFour?.headingOne}</h2>
										<h2>{data?.modalContent?.sectionFour?.headingTwo}</h2>
										<h2>{data?.modalContent?.sectionFour?.headingThree}</h2>

									</div>

									<div className="d-flex justify-content-between justify-content-lg-start mt-4">
										<Image className=" h-100" src={`${isMobile ? data?.modalContent?.sectionFour?.imageOneMobile : data?.modalContent?.sectionFour?.imageOne}`} />
										<Image className="h-100 mx-lg-4 " src={`${isMobile ? data?.modalContent?.sectionFour?.imageTwoMobile : data?.modalContent?.sectionFour?.imageTwo}`} />
										<Image className=" h-100" src={`${isMobile ? data?.modalContent?.sectionFour?.imageThreeMobile : data?.modalContent?.sectionFour?.imageThee}`} />
									</div>
								</div>}
								{data.modalContent.sectionFive && <div className="scroller-element  section-5">
									{isMobile ? <Row className=" flex-column justify-content-center align-items-center"  >
										<Image src={data?.modalContent?.sectionFive?.imageOneMobile} />
										<Image className="mt-4" src={data?.modalContent?.sectionFive?.imageTwoMobile} />
									</Row> : <Image src={data?.modalContent?.sectionFive?.image} />}
									<p className="mt-4">
										{data?.modalContent?.sectionFive?.text}
									</p>

								</div>}
								{data.modalContent.sectionSix && <div className="scroller-element h-100 section-6 ">
									<div className="section-6-top-row mt-lg-5 pt-lg-5 ">
										<h2 className="mb-0">
											<span className="linear-gradient me-2">{data?.modalContent?.sectionSix?.headingColored}
											</span>{data?.modalContent?.sectionSix?.heading}
										</h2>
										<p className="my-4">{data?.modalContent?.sectionSix?.text}</p>
									</div>
									<Image className=" d-flex justify-content-end align-items-end "
										src={`${isMobile ? data?.modalContent?.sectionSix?.imageMobile : data?.modalContent?.sectionSix?.image}`}
									/>

								</div>}
								{data.modalContent.sectionSeven && <div className="scroller-element margin-right-120 section-7">
									<Row className=" flex-row justify-content-start align-items-center ">
										<Col md={12}><Image className="w-100" src={`${isMobile ? data?.modalContent?.sectionSeven?.imageOneMobile : data?.modalContent?.sectionSeven?.imageOne}`} /></Col>
										<Col xs={6} className="mt-4">
											<Image className="w-100" src={`${isMobile ? data?.modalContent?.sectionSeven?.imageTwoMobile : data?.modalContent?.sectionSeven?.imageTwo}`} />
										</Col>
										<Col xs={6} className="mt-4">
											<Image className="w-100" src={`${isMobile ? data?.modalContent?.sectionSeven?.imageThreeMobile : data?.modalContent?.sectionSeven?.imageThree}`} />
										</Col>
									</Row>
								</div>}
							</Container>
						)
					))}
				</Modal.Body>
			</Modal>
		</>
	);
}
export default ModalOverlay;
