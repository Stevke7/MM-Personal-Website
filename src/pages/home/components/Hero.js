import { Container, Image} from "react-bootstrap";


function Hero() {
    return (
        <>
            <Container className="container-md">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image src="/images/hero-img.svg"></Image>
                    <h5 className={`text-primary  mt-5 mb-2 mb-lg-0 `}>Miloš Miljanović</h5>
                    <h1 className={`heading-xl  text-center`}> The only designer you need</h1>
                    <h5 className={`text-gray  my-4 text-center`}>
                        Simpler. Faster. Better. <br/> I make it easy for you to do what matters
                        most.
                    </h5>
                    <button className="btn text-white mt-5">See my work </button>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="gear cursor-pointer">
                            <Image src='/icons/moon.stars.fill.svg'></Image>
                    </div>
                </div>
            </Container>
        </> 
    );
}

export default Hero;
