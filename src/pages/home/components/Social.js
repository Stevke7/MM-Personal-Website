import {Image} from "react-bootstrap";

function Social() {
    return (
        <div className='my-5  text-center'>
            <h1>Find me on <span className='text-gradient'>social</span> media</h1>
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
        </div>
    )
}

export default Social