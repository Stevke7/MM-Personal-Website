import { Container, Image } from "react-bootstrap";



function Footer(props) {
const{theme}=props
    return (
        <div className="bg-white footer">
            <Container className="container-lg pb-5">
                <div className="text-center">
                    <h1>Connect with me</h1>
                    <div className="d-flex gap-24 align-items-start justify-content-center">
                        <Image className="cursor-pointer" src="icons/behance-dark.svg"></Image>
                        <Image className="cursor-pointer" src="icons/dribble-dark.svg"></Image>
                        <Image className="cursor-pointer" src="icons/insta-dark.svg"></Image>
                        <Image className="cursor-pointer" src="icons/linkedIn-dark.svg"></Image>
                    </div>
                    <p className="mt-5 pt-5 mb-0 text-light">
                        <div className="border-top mb-3"></div>
                        © 2023 Miloš Miljanović
                    </p>
                </div>
            </Container>
        </div>

    )
}

export default Footer