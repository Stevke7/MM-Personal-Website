import Hero from "./components/Hero";
import MyServices from "./components/MyServices";
import MyWork from "./components/myWork";
import Social from "./components/Social";

function Home(props) {
	let { id } = props;
	return (
		<>
			<Hero id={id} />
			<MyServices />
			<MyWork />
			<Social />
		</>
	);
}

export default Home;
