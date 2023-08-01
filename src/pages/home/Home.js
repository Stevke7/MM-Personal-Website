import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";
import MyServices from "./components/MyServices";
import Social from "./components/Social";
import WorkSection from "./components/WorkSection";

function Home(props) {
	let { id, services, work, workRef, contactRef, isMobile, themeSwitch } = props;


	return (
		<>
			<Hero themeSwitch={themeSwitch} isMobile={isMobile} theme={id} />
			<MyServices theme={id} isMobile={isMobile} id={services} />
			<div ref={workRef}>
				<WorkSection theme={id} id={work} />
			</div>
			<div ref={contactRef}>
				<CallToAction theme={id} />
			</div>
		</>
	);
}

export default Home;
