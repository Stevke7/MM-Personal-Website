import {Container, Image, Row} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";

function Social() {
    const isMobile = useMediaQuery({query: `(max-width: 1024px)`});
    return (
        <>
            {!isMobile ? <div className='my-5  text-center'>
                    <h1>Find me on <span className='text-gradient-blue'>social</span> media</h1>
                    <div className="d-flex m-auto justify-content-center align-item-center mt-4 ">
                        <div className=" d-flex align-items-center ">
                            <div className="social-icon me-4 ">
                                <Image src='/icons/behance.svg'></Image>
                            </div>
                            <div className="social-icon me-4 ">
                                <Image src='/icons/dribble.svg'></Image>
                            </div>
                            <div className="social-icon me-4 ">
                                <Image src='/icons/linkedIn.svg'></Image>
                            </div>
                            <div className="social-icon me-4 ">
                                <Image src='/icons/instagram.svg'></Image>
                            </div>
                            <div className="social-icon me-4 ">
                                <Image src='/icons/facebook.svg'></Image>
                            </div>
                        </div>

                    </div>
                </div> :
                <Container>
                    <Row className="justify-content-center align-items-center my-5">
                        <h1 className='text-center'>Find me on <span className='text-gradient '>social</span> media</h1>
                        <div className="  d-flex m-auto justify-content-between align-item-center mt-2 ">
                            <div className="social-icon  ">
                                <Image src='/icons/behance.svg'></Image>
                            </div>
                            <div className="social-icon ">
                                <Image src='/icons/dribble.svg'></Image>
                            </div>
                            <div className="social-icon  ">
                                <Image src='/icons/linkedIn.svg'></Image>
                            </div>
                            <div className="social-icon ">
                                <Image src='/icons/instagram.svg'></Image>
                            </div>
                            <div className="social-icon  ">
                                <Image src='/icons/facebook.svg'></Image>
                            </div>
                        </div>
                    </Row>

                </Container>

            }
        </>
    )
}

export default Social