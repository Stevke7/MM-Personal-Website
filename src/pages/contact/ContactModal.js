import {Modal} from "react-bootstrap";
import {useCallback, useState} from "react";
import RequestProject from "./components/RequestProject";
import {IoIosArrowBack} from "@react-icons/all-files/io/IoIosArrowBack";
import StepperDots from "../../shared/StepperDots";
import {Step1} from "./components/Step1";
import {Step2} from "./components/Step2";
import {Step3} from "./components/Step3";
import {Step4} from "./components/Step4";


export function ContactModal(props) {
    const [step, setStep] = useState(0)
    let stepArray = [1, 2, 3, 4, 5, 6]
    let [data, setData] = useState({
        webDesign: false,
        logoDesign: false,
        graphicDesign: false,
        start: new Date(),
        end: '',
        min: false,
        middle: false,
        max: false,
        name: '',
        companyName: '',
        website: '',
        ProjectDescription: '',
        firstName: '',
        lastName: '',
        email: ''
    });


    const handleNextStep = () => {
        const nextStep = step + 1;
        if (step === 1) {
            let checked = document.querySelectorAll('input[type=checkbox]:checked').length
            if (!checked) {
                alert("You must check at least one checkbox.")
            } else {
                setStep(nextStep)
            }
        } else {
            setStep(nextStep)
        }
    }
    const handleBackStep = () => {
        const back = step - 1;
        setStep(back)
    }
    const inputHandler = (event) => {
        
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const checkboxHandler = (event) => {
        let savedData;
        savedData = {
            ...data,
            [event.target.name]: event.target.checked,
        };
        setData(savedData)

    };

    const handleChangeTimepicker = (newValue, name) => {
        setData({...data, [name]: new Date(newValue)});
    };

    const steps = {
        0: <RequestProject nextStep={handleNextStep} onHide={props.onHide} step={step} setStep={setStep}/>,
        1: <Step1 checkboxHandler={checkboxHandler} nextStep={handleNextStep} data={data}/>,
        2: <Step2 handleChangeTimepicker={handleChangeTimepicker} data={data} nextStep={handleNextStep}/>,
        3: <Step3 checkboxHandler={checkboxHandler} nextStep={handleNextStep} data={data}/>,
        4: <Step4 inputHandler={inputHandler} nextStep={handleNextStep} data={data}></Step4>
    }

    const CurrentStep = useCallback(() => {
        return steps[step];
    }, [step, JSON.stringify(data)]);

    return (
        <Modal

            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {step > 0 &&
                <Modal.Header className="d-flex justify-content-between align-items-center border-bt-none w-100  px-5">
                    <p onClick={handleBackStep} className='text-md m-0 cursor-pointer text-primary'><IoIosArrowBack/>Back
                    </p>
                    <StepperDots stepArray={stepArray} step={step}/>
                    <p onClick={props.onHide} className='text-md m-0 cursor-pointer text-primary'>Close</p>
                </Modal.Header>
            }
            <Modal.Body>
                <CurrentStep/>
            </Modal.Body>
        </Modal>

    )
}

