import {Button} from "react-bootstrap";
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
        <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
        >
            <div className="container heading-text my-3">
                {placeholderText.map((item, index, id) => {
                    return <AnimatedText id={id} {...item} key={index}/>;
                })}

                <div className="w-auto d-flex mt-5 align-items-center justify-content-center">
                    <Button className="btn btn-primary fw-normal">Explore<BiDownArrowAlt/></Button>
                </div>

            </div>
            <TextLoop/>
        </motion.div>
    );

}

export default Hero