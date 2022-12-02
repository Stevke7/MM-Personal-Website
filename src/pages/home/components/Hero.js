import {Button, Container, Image} from "react-bootstrap";
import {motion} from "framer-motion";
import AnimatedText from "./animate/AnimatedText";
import {BiDownArrowAlt} from "react-icons/bi";
import TextLoop from "./TextLoop";


function Hero(props) {
    let {id} = props
    const placeholderText = [
        {
            text: "I DESIGN UNIQUE WEB / GRAPHIC EXPERIENCES Crafting " +
                "digital experiences for businesses with a user interface and user" +
                " experience focused approach",
            id: id
        },
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };
    return (
        <>
            <Container className="py-5">
                {/*<motion.div*/}
                {/*    initial="hidden"*/}
                {/*    animate="visible"*/}
                {/*    variants={container}*/}
                {/*>*/}
                {/*    <div className="container heading-text my-3">*/}
                {/*        {placeholderText.map((item, index, id) => {*/}
                {/*            return <AnimatedText id={id} {...item} key={index}/>;*/}
                {/*        })}*/}

                {/*        <div className="w-auto d-flex mt-5 align-items-center justify-content-center">*/}
                {/*            <Button className="btn btn-primary fw-normal">Explore<BiDownArrowAlt/></Button>*/}
                {/*        </div>*/}

                {/*    </div>*/}

                {/*</motion.div>*/}
                <div className="d-flex flex-column p-5 justify-content-center align-items-center">
                    <Image src="/images/hero-img.svg"></Image>
                    <h5 className="text-primary my-4">Miloš Miljanović</h5>
                    <h1 className="display-xl"> The only designer you need</h1>
                    <h5 className="text-gray my-4">Simpler. Faster. Better.
                        I make it easy for you to do what matters most.</h5>
                    <button className="btn text-white my-5">See my work</button>
                </div>
            </Container>
            {/*<TextLoop/>*/}
        </>
    );

}

export default Hero