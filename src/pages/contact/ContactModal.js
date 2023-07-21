import {Form, Modal} from "react-bootstrap";
import {useContext, useState} from "react";
import RequestProject from "./components/RequestProject";
import {IoIosArrowBack} from "@react-icons/all-files/io/IoIosArrowBack";
import StepperDots from "../../shared/StepperDots";
import {Step1} from "./components/Step1";
import {Step2} from "./components/Step2";
import {Step3} from "./components/Step3";
import {Step4} from "./components/Step4";
import {ContactModalContext} from "./ContactModalContext";
import {useMultiStepForm} from "../../shared/useMultistepForm";
import {Step5} from "./components/Step5";
import {Step6} from "./components/Step6";
import {BsArrowRight} from "react-icons/bs";
import {toast} from "react-toastify";
import {SuccessMessage} from "../../shared/Alert";




export function ContactModal(props) {
    const {data, setData} = useContext(ContactModalContext);
    const {currentStepIndex, back, next, step, isLastStep, setCurrentStepIndex} = useMultiStepForm([
        <RequestProject/>,
        <Step1 nextStep={onSubmit} checkboxHandler={checkboxHandler} data={data}/>,
        <Step2 handleChangeTimepicker={handleChangeTimepicker} data={data}/>,
        <Step3 radioHandler={handleRadioChange} data={data}/>,
        <Step4 inputHandler={inputHandler} data={data}/>,
        <Step5 inputHandler={inputHandler} data={data}></Step5>,
        <Step6 inputHandler={inputHandler} data={data}></Step6>
    ])
    const stepArray = [1, 2, 3, 4, 5, 6];
    const [fullscreen, setFullscreen] = useState(true);


    function inputHandler(event) {
        event.preventDefault();
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    function checkboxHandler(event) {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.checked,
        }));
    };

    function handleRadioChange(event) {
        const {name} = event.target;
        const updatedData = {
            ...data,
            minBudget: name === "minBudget",
            middleBudget: name === "middleBudget",
            maxBudget: name === "maxBudget",
        };
        setData(updatedData);
    }

    function handleChangeTimepicker(newValue, name) {
        setData({...data, [name]: new Date(newValue)});
    };

    function sendMessage() {
        props.setModalShow(false)
        toast.success(<SuccessMessage/>, {position:toast.POSITION.TOP_CENTER,className:"success-toast",autoClose:2000},)
        setCurrentStepIndex(0)
        resetState()
    }
    function resetState() {
        setData({
            webDesign: false,
            logoDesign: false,
            graphicDesign: false,
            start: new Date(),
            end: "",
            minBudget: false,
            middleBudget: false,
            maxBudget: false,
            name: "",
            companyName: "",
            website: "",
            projectDescription: "",
            firstName: "",
            lastName: "",
            email: "",
        });
    }

    function onSubmit (e) {
        e.preventDefault()
        if  (currentStepIndex>0 && !data.webDesign && !data.logoDesign && !data.graphicDesign) {
            toast.warn("You need to select at least one option!", {position:toast.POSITION.TOP_CENTER})
            return;}
        if(currentStepIndex===3 && !data.minBudget && !data.middleBudget && !data.maxBudget){
            toast.warn("You need to select at least one option!", {position:toast.POSITION.TOP_CENTER})
            return;
        }
        if ( !isLastStep ){next()} else {sendMessage()}
    }

    console.log(data)

    return (
        <>
            <Modal
                {...props}
                size="xl"
                fullscreen={props.isMobile ? fullscreen===true : fullscreen===false}
                aria-labelledby="example-custom-modal-styling-title"
                centered
                className="modal"

            >
                {currentStepIndex > 0 && (
                    <Modal.Header
                        className="d-flex justify-content-between align-items-center border-bt-none w-100  px-5">
                        <p
                            onClick={back}
                            className="text-md m-0 cursor-pointer text-primary"
                        >
                            <IoIosArrowBack/>
                            Back
                        </p>
                        <StepperDots stepArray={stepArray} step={currentStepIndex}/>
                        <p
                            onClick={props.onHide}
                            className="text-md m-0 cursor-pointer text-primary"
                        >
                            Close
                        </p>
                    </Modal.Header>
                )}
                {currentStepIndex === 0 && (
                    <Modal.Header
                        className="d-flex justify-content-end  border-bt-none w-100 ">
                        <p
                            onClick={props.onHide}
                            className="text-md m-0 cursor-pointer text-primary"
                        >
                            Close
                        </p>
                    </Modal.Header>
                )}
                <Modal.Body>
                    <Form  onSubmit={onSubmit} className="h-100">
                            <div className="mt-5">{step}</div>
                        <div className="w-100 h-100 d-flex justify-content-center align-items-end ">
                            {!isLastStep ?
                                <button type="submit"  className="btn text-white  ">
                                    {currentStepIndex === 0 ?
                                        <span className="d-flex align-items-center">
                                        Start <BsArrowRight className="ms-2"/>
                                    </span> : "Next"}
                                </button> :
                                <button  type="submit" className="btn text-white ">Send</button>
                            }
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="w-100 d-flex justify-content-center">
                        <p className="text-gray text-sm m-0"> Hate forms? Contact me at info@milosmiljanovic.com</p>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
