import { Modal } from "react-bootstrap";
import { useContext } from "react";
import RequestProject from "./components/RequestProject";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import StepperDots from "../../shared/StepperDots";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";
import { ContactModalContext } from "./ContactModalContext";
import {useMultistepForm} from "../../shared/MultistepForm";
import {Step5} from "./components/Step5";
import {Step6} from "./components/Step6";

export function ContactModal(props) {
    const { data, setData } = useContext(ContactModalContext);
    const {currentStepIndex, back, next,step , isLastStep} = useMultistepForm([
        <RequestProject/>,
        <Step1 checkboxHandler={checkboxHandler} data={data}/>,
        <Step2 handleChangeTimepicker={handleChangeTimepicker} data={data}/>,
        <Step3 radioHandler={handleRadioChange} data={data}/>,
        <Step4 inputHandler={inputHandler} data={data}/>,
        <Step5 inputHandler={inputHandler} data={data}></Step5>,
        <Step6 inputHandler={inputHandler} data={data}></Step6>
    ])
    const stepArray = [ 1, 2, 3, 4, 5, 6];

    function inputHandler (event)  {
        event.preventDefault();
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    function checkboxHandler  (event)  {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.checked,
        }));


    };
    function handleRadioChange(event) {
        const { name } = event.target;
        const updatedData = {
            ...data,
            minBudget: name === "minBudget",
            middleBudget: name === "middleBudget",
            maxBudget: name === "maxBudget",
        };
        setData(updatedData);
    }
    function handleChangeTimepicker  (newValue, name)  {
        setData({...data, [name]: new Date(newValue)});
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
        >
            {currentStepIndex > 0 && (
                <Modal.Header className="d-flex justify-content-between align-items-center border-bt-none w-100  px-5">
                    <p
                        onClick={back}
                        className="text-md m-0 cursor-pointer text-primary"
                    >
                        <IoIosArrowBack />
                        Back
                    </p>
                    <StepperDots stepArray={stepArray} step={currentStepIndex} />
                    <p
                        onClick={props.onHide}
                        className="text-md m-0 cursor-pointer text-primary"
                    >
                        Close
                    </p>
                </Modal.Header>
            )}
            <Modal.Body>
                    {step}
            </Modal.Body>
            <Modal.Footer >
                <div className="w-100 d-flex justify-content-center">
                    {!isLastStep ? <button type="submit" onClick={next} className="btn text-white ">Next
                    </button> : <button type="submit" className="btn text-white ">Send</button>}
                </div>
            </Modal.Footer>

        </Modal>
    );
}
