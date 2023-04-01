import Hero from "./components/Hero";
import MyServices from "./components/MyServices";
import Social from "./components/Social";
import WorkSection from "./components/WorkSection";

function Home(props) {
	let { id, services, work } = props;
	return (
		<>
			<Hero id={id} />
			<MyServices id={services} />
			<WorkSection id={work} />
			<Social />
		</>
	);
}

export default Home;
