import { useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import { TbPlus } from "react-icons/tb";

function MyServices(props) {
	const { theme } = props
	const [showUX, setShowUx] = useState(false);
	const [showBranding, setShowBranding] = useState(false);
	const [showGrahicDesign, setShowGraphicDesign] = useState(false);

	function openUx() {
		setShowUx((prevState) => !showUX);
	}
	function openBranding() {
		setShowBranding((prevState) => !showBranding);
	}
	function openGraphicDesign() {
		setShowGraphicDesign((prevState) => !showGrahicDesign);
	}

	return (
		<>
			<Container fluid className={`${theme === "light" ? 'bg-light-gray' : 'bg-black '}`}>
				<Container className="container-lg " >
					<h1 className={`text-center mb-5 heading-xl`}>What I can do for You</h1>
					<Row className=" cards">
						<div className="col-md-4 mb-4 mb-lg-0 ">
							<div className={`card-service ${!showUX && 'hover-primary'}`}>
								<div className={`card-content ${showUX && "hide-content"}`}>
									<Image src={`${theme === "light" ? 'icons/uiux-light.svg' : "icons/uiux.svg"}`}></Image>

									<h4>UI/UX & Web Design</h4>
								</div>
								<div className="plus bg-none">
									<Image
										onClick={openUx}
										className={`see-more ${showUX && "active-more-ux"}`} src={`${theme === "light" ? "icons/see more.svg" : "icons/seeMore-dark.svg"}`}>
									</Image>
								</div>

								<div className={`more-ux ${showUX && "active-ux bg-primary hover-primary"}`}>
									<div className="active-ux-content">
										<h4>UI/UX & Web Design</h4>
										<p>
											Custom, responsive and beautiful. Wow your customers at a
											first glance.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4 mb-lg-0 ">
							<div className={`card-service ${!showBranding && 'hover-purple'}`}>
								<div
									className={`card-content ${showBranding && "hide-content"}`}
								>

									<Image src={`${theme === "light" ? 'icons/logoDesign-light.svg' : "icons/logoDesign.svg"}`}></Image>

									<h4 className="logo-design-text">Logo Design & Branding</h4>
								</div>
								<div className="plus bg-none">
									<Image
										onClick={openBranding}
										className={`see-more ${showBranding && "active-more-ux"}`} src={`${theme === "light" ? "icons/see more.svg" : "icons/seeMore-dark.svg"}`}>
									</Image>
								</div>
								<div
									className={`more-branding ${showBranding && "active-branding bg-purple hover-purple"}`}>
									<div className="active-branding-content">
										<h4>Logo Design & Branding</h4>
										<p>Simple and timeles. Let's make them remember you.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4 mb-lg-0 ">
							<div className={`card-service ${!showGrahicDesign && 'hover-rose'}`}>
								<div className={`card-content ${showGrahicDesign && "hide-content "}`}>
									<Image src={`${theme === "light" ? 'icons/graphicDesign-light.svg' : "icons/graphicDesign.svg"}`}></Image>
									<h4>Graphic Design</h4>
								</div>
								<div className="plus bg-none">
									<Image
										onClick={openGraphicDesign}
										className={`see-more ${showGrahicDesign && "active-more-ux"}`} src={`${theme === "light" ? "icons/see more.svg" : "icons/seeMore-dark.svg"}`}>
									</Image>
								</div>
								<div className={`more-design ${showGrahicDesign && "active-design bg-rose hover-rose"}`}>
									<div className="active-design-content">
										<h4>Graphic Design</h4>
										<p>
											Attract audiences, enhance sales and build relationships
											using my creative design.
										</p>
									</div>
								</div>
							</div>
						</div>
					</Row>

				</Container>
			</Container>


		</>
	);
}

export default MyServices;
