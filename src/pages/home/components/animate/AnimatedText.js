import React, {useEffect} from "react";
import {motion} from "framer-motion";
import {useMediaQuery} from "react-responsive";


const Wrapper = (props) => {
    return <span className="word-wrapper">{props.children}</span>;
};

const AnimatedCharacters = (props) => {
    console.log(props.id)


    const item = {
        hidden: {
            y: "200%",

            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
        },
        visible: {
            y: 0,

            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75}
        }
    };
    const paragraph = {
        hidden: {
            y: "300%",

            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
        },
        visible: {
            y: 0,

            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.40}
        }
    }

    const isMobile = useMediaQuery({query: `(max-width: 1024px)`});
    const splitWords = props.text.split(" ");
    const words = [];
    const smallWords = []
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }


    for (const [, paragraph] of splitWords.entries()) {
        smallWords.push(paragraph.split(""));
    }
    words.map((word) => {
        return word.push("\u00A0");
    });
    smallWords.map((word) => {
        return word.push("\u00A0");
    });

    const firstLine = words.slice(0, 3)
    const secondLine = words.slice(3, 6)
    const thirdLine = words.slice(6, 7)
    const fourthLine = smallWords.slice(7)

    const firstWord = fourthLine[0].flat()
    const secondWord = fourthLine[1].flat()
    const thirdWord = fourthLine[2].flat()
    const fourthWord = fourthLine[3].flat()
    const fifthWord = fourthLine[4].flat()
    const sixWord = fourthLine[5].flat()
    const sevenWord = fourthLine[6].flat()
    const eightWord = fourthLine[7].flat()
    const nineWord = fourthLine[8].flat()
    const tenWord = fourthLine[9].flat()
    const elevenWord = fourthLine[10].flat()
    const twelveWord = fourthLine[11].flat()
    const thirteenWord = fourthLine[12].flat()
    const fourteenWord = fourthLine[13].flat()

    return (
        <>
            {!isMobile ? <div id={props.id} className="d-flex flex-column align-items-center">
                    <div className="first-line">
                        {firstLine.map((word, index) => {
                            return (
                                <Wrapper key={index}>
                                    {firstLine[index].flat().map((element, index) => {
                                        return (
                                            <>
                                                <h1 style={{overflow: "hidden", display: "inline-block"}} key={index}>
                                                    <motion.span style={{display: "inline-block"}}
                                                                 variants={item}>
                                                        {element}
                                                    </motion.span>
                                                </h1>
                                            </>
                                        );
                                    })}
                                </Wrapper>
                            );
                        })}
                    </div>
                    <div className="second-line">
                        {secondLine.map((word, index) => {
                            return (
                                <Wrapper key={index}>
                                    {secondLine[index].flat().map((element, index) => {
                                        return (
                                            <>
                                                <h1 style={{overflow: "hidden", display: "inline-block"}} key={index}>
                                                    <motion.span style={{display: "inline-block"}} variants={item}>
                                                        {element}
                                                    </motion.span>
                                                </h1>
                                            </>
                                        );
                                    })}
                                </Wrapper>
                            );
                        })}
                    </div>
                    <div className='third-line d-flex  align-items-center '>
                        <div className="third-line-left">
                            {thirdLine.map((word, index) => {
                                return (
                                    <Wrapper key={index}>
                                        {thirdLine[index].flat().map((element, index) => {
                                            return (
                                                <>
                                                    <h1 style={{overflow: "hidden", display: "inline-block"}} key={index}>
                                                        <motion.span style={{display: "inline-block"}} variants={item}>
                                                            {element}
                                                        </motion.span>
                                                    </h1>
                                                </>
                                            );
                                        })}
                                    </Wrapper>
                                );
                            })}
                        </div>
                        <div className="third-line-right">
                            <Wrapper>
                                <p style={{overflow: "hidden", display: "flex", flexWrap: "wrap"}}>
                                    <motion.span style={{display: "inline-block", width: "fit-content",}}
                                                 variants={paragraph}>
                                        {firstWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {secondWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {thirdWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {fourthWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {fifthWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {sixWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {sevenWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {eightWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {nineWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {tenWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {elevenWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {twelveWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {thirteenWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {fourteenWord}
                                    </motion.span>
                                </p>
                            </Wrapper>

                        </div>
                    </div>
                </div> :
                <div className='fit-content'>
                    <div className="first-line">
                        {firstLine.map((word, index) => {
                            return (
                                <Wrapper key={index}>
                                    {firstLine[index].flat().map((element, index) => {
                                        return (
                                            <>
                                                <h1 style={{overflow: "hidden", display: "inline-block"}} key={index}>
                                                    <motion.span style={{display: "inline-block"}} variants={item}>
                                                        {element}
                                                    </motion.span>
                                                </h1>
                                            </>
                                        );
                                    })}
                                </Wrapper>
                            );
                        })}
                    </div>
                    <div className="second-line">
                        {secondLine.map((word, index) => {
                            return (
                                <Wrapper key={index}>
                                    {secondLine[index].flat().map((element, index) => {
                                        return (
                                            <>
                                                <h1 style={{overflow: "hidden", display: "inline-block"}} key={index}>
                                                    <motion.span style={{display: "inline-block"}} variants={item}>
                                                        {element}
                                                    </motion.span>
                                                </h1>
                                            </>
                                        );
                                    })}
                                </Wrapper>
                            );
                        })}
                    </div>
                    <div className='third-line  '>
                        <div className="third-line-left">
                            {thirdLine.map((word, index) => {
                                return (
                                    <Wrapper key={index}>
                                        {thirdLine[index].flat().map((element, index) => {
                                            return (
                                                <>
                                                    <h1 style={{overflow: "hidden", display: "inline-block"}}
                                                        key={index}>
                                                        <motion.span style={{display: "inline-block"}} variants={item}>
                                                            {element}
                                                        </motion.span>
                                                    </h1>
                                                </>
                                            );
                                        })}
                                    </Wrapper>
                                );
                            })}
                        </div>
                        <div className="third-line-right mt-4">
                            <Wrapper>
                                <p style={{overflow: "hidden", display: "flex", flexWrap: "wrap"}}>
                                    <motion.span style={{display: "inline-block", width: "fit-content",}}
                                                 variants={paragraph}>
                                        {firstWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {secondWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {thirdWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {fourthWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {fifthWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {sixWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {sevenWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {eightWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {nineWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {tenWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {elevenWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {twelveWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {thirteenWord}
                                    </motion.span>
                                    <motion.span style={{display: "inline-block", width: "fit-content"}}
                                                 variants={paragraph}>
                                        {fourteenWord}
                                    </motion.span>
                                </p>
                            </Wrapper>

                        </div>
                    </div>

                </div>
            }
        </>

    );
};

export default AnimatedCharacters;