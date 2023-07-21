import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";
import MyServices from "./components/MyServices";
import Social from "./components/Social";
import WorkSection from "./components/WorkSection";

function Home(props) {
	let { id, services, work, workRef, contactRef, isMobile } = props;


	return (
		<>
			<Hero isMobile={isMobile} id={id} />
			<MyServices isMobile={isMobile} id={services} />
			<div ref={workRef}>
				<WorkSection id={work} />
			</div>
			<div ref={contactRef}>
				<CallToAction/>
			</div>

		</>
	);
}

export default Home;
