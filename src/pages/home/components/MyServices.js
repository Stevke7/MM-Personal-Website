import { Col, Container, Image, Row } from "react-bootstrap";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BiPlus } from "react-icons/bi";

function MyServices() {
	let [showUX, setShowUx] = useState(false);
	let [showBranding, setShowBranding] = useState(false);
	let [showGrahicDesign, setShowGraphicDesign] = useState(false);
	const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });

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
			{!isMobile ? (
				<div className="px-5 services-container">
					<div className="services-content">
						<h1 className="text-center my-5">What I can do for You</h1>
						<div className="my-work cards">
							<div className="card-service" onClick={openUx}>
								<div className={`card-content ${showUX && "hide-content"}`}>
									<div className="icon-circle gradient1">
										<svg
											width="29"
											height="29"
											viewBox="0 0 29 29"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M26 10.6652V8.39854C26 6.15833 26 5.03822 25.564 4.18257C25.1805 3.42992 24.5686 2.818 23.816 2.43451C22.9603 1.99854 21.8402 1.99854 19.6 1.99854H8.4C6.15979 1.99854 5.03969 1.99854 4.18404 2.43451C3.43139 2.818 2.81947 3.42992 2.43597 4.18257C2 5.03822 2 6.15833 2 8.39853V19.5985C2 21.8387 2 22.9589 2.43597 23.8145C2.81947 24.5671 3.43139 25.1791 4.18404 25.5626C5.03969 25.9985 6.15979 25.9985 8.4 25.9985H10.6667M21.1816 21.6136L18.9172 25.8189C18.5471 26.5063 18.362 26.85 18.1364 26.9397C17.9406 27.0176 17.7195 26.9982 17.5401 26.8876C17.3335 26.7602 17.2108 26.3896 16.9654 25.6485L13.3339 14.6803C13.119 14.0313 13.0115 13.7068 13.0888 13.4907C13.156 13.3026 13.304 13.1546 13.4921 13.0873C13.7082 13.0101 14.0327 13.1175 14.6817 13.3324L25.6499 16.964C26.391 17.2094 26.7616 17.3321 26.889 17.5387C26.9997 17.7181 27.019 17.9392 26.9411 18.135C26.8514 18.3606 26.5077 18.5456 25.8203 18.9158L21.6151 21.1802C21.5103 21.2366 21.458 21.2648 21.4121 21.301C21.3714 21.3332 21.3346 21.37 21.3025 21.4107C21.2662 21.4565 21.238 21.5089 21.1816 21.6136Z"
												stroke="#2365CE"
												stroke-width="3"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>

									<h4>UI/UX & Web Design</h4>
								</div>
								<BiPlus
									onClick={openUx}
									id={1}
									className={`see-more ${showUX && "active-more-ux"}`}
								/>
								<div className={`more-ux ${showUX && "active-ux"}`}>
									<div className="active-ux-content">
										<h4>UI/UX & Web Design</h4>
										<p>
											Custom, responsive and beautiful. Wow your customers at a
											first glance.
										</p>
									</div>
								</div>
							</div>
							<div className="card-service" onClick={openBranding}>
								<div
									className={`card-content ${showBranding && "hide-content"}`}
								>
									<div className="icon-circle gradient2">
										<svg
											width="32"
											height="33"
											viewBox="0 0 32 33"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.8373 27.7856C21.5594 29.4406 18.8159 30.332 16.0002 30.332C13.1845 30.332 10.441 29.4406 8.16307 27.7856M21.8452 5.01478C24.3759 6.24911 26.4509 8.25294 27.7728 10.7391C29.0947 13.2252 29.5957 16.066 29.2038 18.8543M2.79677 18.8542C2.40489 16.0659 2.9058 13.2251 4.22771 10.7389C5.54961 8.25281 7.62464 6.24898 10.1554 5.01465M23.3335 16.9987C23.3335 21.0488 20.0503 24.332 16.0002 24.332C11.9501 24.332 8.66688 21.0488 8.66688 16.9987C8.66688 12.9486 11.9501 9.66537 16.0002 9.66537C20.0503 9.66537 23.3335 12.9486 23.3335 16.9987Z"
												stroke="#53389E"
												stroke-width="3"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>

									<h4 className="logo-design-text">Logo Design & Branding</h4>
								</div>
								<BiPlus
									onClick={openBranding}
									id={2}
									className={`see-more ${showBranding && "active-more-ux"}`}
								/>
								<div
									className={`more-branding ${
										showBranding && "active-branding"
									}`}
								>
									<div className="active-branding-content">
										<h4>Logo Design & Branding</h4>
										<p>Simple and timeles. Let's make them remember you.</p>
									</div>
								</div>
							</div>
							<div className="card-service" onClick={openGraphicDesign}>
								<div
									className={`card-content ${
										showGrahicDesign && "hide-content"
									}`}
								>
									<div className="icon-circle gradient3">
										<svg
											className="mozda"
											width="32"
											height="33"
											viewBox="0 0 32 33"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M13.3337 10.3317L4.00033 10.3317M28.0003 10.3317L18.667 10.3317M18.667 10.6676C23.2676 11.8518 26.667 16.028 26.667 20.9983M5.33366 20.9983C5.33366 16.028 8.73305 11.8518 13.3337 10.6676M4.80033 26.3317H5.86699C6.61373 26.3317 6.9871 26.3317 7.27231 26.1864C7.5232 26.0586 7.72717 25.8546 7.855 25.6037C8.00033 25.3185 8.00033 24.9451 8.00033 24.1984V23.1317C8.00033 22.385 8.00033 22.0116 7.855 21.7264C7.72717 21.4755 7.5232 21.2715 7.27231 21.1437C6.9871 20.9984 6.61373 20.9984 5.86699 20.9984H4.80033C4.05359 20.9984 3.68022 20.9984 3.395 21.1437C3.14412 21.2715 2.94015 21.4755 2.81232 21.7264C2.66699 22.0116 2.66699 22.385 2.66699 23.1317V24.1984C2.66699 24.9451 2.66699 25.3185 2.81232 25.6037C2.94015 25.8546 3.14412 26.0586 3.395 26.1864C3.68022 26.3317 4.05359 26.3317 4.80033 26.3317ZM15.467 12.9984H16.5337C17.2804 12.9984 17.6538 12.9984 17.939 12.853C18.1899 12.7252 18.3938 12.5212 18.5217 12.2704C18.667 11.9851 18.667 11.6118 18.667 10.865V9.79837C18.667 9.05164 18.667 8.67827 18.5217 8.39305C18.3938 8.14217 18.1899 7.93819 17.939 7.81036C17.6538 7.66504 17.2804 7.66504 16.5337 7.66504H15.467C14.7203 7.66504 14.3469 7.66504 14.0617 7.81036C13.8108 7.93819 13.6068 8.14217 13.479 8.39305C13.3337 8.67827 13.3337 9.05164 13.3337 9.79837V10.865C13.3337 11.6118 13.3337 11.9851 13.479 12.2704C13.6068 12.5212 13.8108 12.7252 14.0617 12.853C14.3469 12.9984 14.7203 12.9984 15.467 12.9984ZM26.1337 26.3317H27.2003C27.9471 26.3317 28.3204 26.3317 28.6056 26.1864C28.8565 26.0586 29.0605 25.8546 29.1883 25.6037C29.3337 25.3185 29.3337 24.9451 29.3337 24.1984V23.1317C29.3337 22.385 29.3337 22.0116 29.1883 21.7264C29.0605 21.4755 28.8565 21.2715 28.6056 21.1437C28.3204 20.9984 27.9471 20.9984 27.2003 20.9984H26.1337C25.3869 20.9984 25.0136 20.9984 24.7283 21.1437C24.4775 21.2715 24.2735 21.4755 24.1456 21.7264C24.0003 22.0116 24.0003 22.385 24.0003 23.1317V24.1984C24.0003 24.9451 24.0003 25.3185 24.1456 25.6037C24.2735 25.8546 24.4775 26.0586 24.7283 26.1864C25.0136 26.3317 25.3869 26.3317 26.1337 26.3317ZM29.3337 10.3317C29.3337 11.0681 28.7367 11.665 28.0003 11.665C27.2639 11.665 26.667 11.0681 26.667 10.3317C26.667 9.59533 27.2639 8.99837 28.0003 8.99837C28.7367 8.99837 29.3337 9.59533 29.3337 10.3317ZM5.33366 10.3317C5.33366 11.0681 4.73671 11.665 4.00033 11.665C3.26395 11.665 2.66699 11.0681 2.66699 10.3317C2.66699 9.59533 3.26395 8.99837 4.00033 8.99837C4.73671 8.99837 5.33366 9.59533 5.33366 10.3317Z"
												stroke="#039855"
												stroke-width="3"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>

									<h4>Graphic Design</h4>
								</div>
								<BiPlus
									onClick={openGraphicDesign}
									id={3}
									className={`see-more ${showGrahicDesign && "active-more-ux"}`}
								/>
								<div
									className={`more-design ${
										showGrahicDesign && "active-design"
									}`}
								>
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
					</div>
				</div>
			) : (
				//<container></container>
				<div></div>
			)}
		</>
	);
}

export default MyServices;
