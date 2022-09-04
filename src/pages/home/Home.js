import Hero from "./components/Hero";
import MyWork from "./components/myWork";
import Social from "./components/Social";


function Home(props) {
    let {id} = props
    return (
        <>
            <Hero id={id}/>
            <MyWork/>
            <Social/>
        </>
    )
}

export default Home

