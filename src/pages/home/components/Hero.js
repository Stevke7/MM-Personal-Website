import { Container, Image } from "react-bootstrap";


function Hero(props) {
    const { themeSwitch, theme } = props
    console.log(theme);
    return (
        <>
            <Container className="container-md">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image src="/images/hero-img.svg"></Image>
                    <h5 className={`text-primary  mt-5 mb-2 mb-lg-0 opacity-1 `}>Miloš Miljanović</h5>
                    <h1 className={`heading-xl  text-center`}> The only designer you need</h1>
                    <h5 className={`text-gray  my-4 text-center`}>
                        Simpler. Faster. Better. <br /> I make it easy for you to do what matters
                        most.
                    </h5>
                    <button className="btn text-white mt-5">See my work </button>
                </div>
                <div className="d-flex justify-content-end">
                    <div onClick={themeSwitch} className="themeSwitch cursor-pointer mt-4">
                        <Image src={`${theme === "light" ? '/icons/moon.stars.fill.svg' : '/icons/light.svg'}`}></Image>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Hero;
