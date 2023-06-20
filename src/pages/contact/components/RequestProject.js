import {Image, Modal} from "react-bootstrap";
import {AiOutlineArrowRight} from "react-icons/ai";

function RequestProject({nextStep}) {


    return (
        <>
            <Modal.Body>{
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <Image className="mb-5" src="/images/hero-img.svg"></Image>
                    <h4 className="mb-3">Request a project</h4>
                    <p className="m-0 w-50 text-center text-lg text-gray">
                        This form helps me quickly understand what your project
                        is about and clarifies important questions in advance.
                        Please be as accurate as possible with your
                        information, as it saves us both time.
                    </p>
                    <p className="text-gray text-sm"> Hate forms? Contact me at info@milosmiljanovic.com</p>
                </div>
            }
            </Modal.Body>
        </>

    )
}

export default RequestProject