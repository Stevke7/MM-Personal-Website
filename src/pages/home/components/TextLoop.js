import Marquee from "react-fast-marquee";
import {GiPolarStar} from "react-icons/gi";

function TextLoop() {
    return (
        <Marquee pauseOnHover={true} speed={100} gradient={false}
                 className="w-100  cursor-pointer marquee py-4 d-flex align-items-center "
                 direction={"right"}>
            <div className="text-uppercase  px-2  d-flex align-items-center">
                <div className='text-loop'>video editing</div>
                <GiPolarStar className=" ms-2 ms-lg-3"/>
            </div>
            <div className="text-uppercase px-2 d-flex align-items-center">
                <div className='text-loop'>branding</div>
                <GiPolarStar className=" ms-2 ms-lg-3"/>
            </div>
            <div className="text-uppercase px-2 d-flex align-items-center">
                <div className='text-loop'>ui/ux</div>
                <GiPolarStar className=" ms-2 ms-lg-3"/>
            </div>
            <div className="text-uppercase px-2 d-flex align-items-center">
                <div className='text-loop'>web design</div>
                <GiPolarStar className=" ms-2 ms-lg-3"/>
            </div>
            <div className="text-uppercase px-2 d-flex align-items-center">
                <div className='text-loop'>motion graphics</div>
                <GiPolarStar className=" ms-2 ms-lg-3"/>
            </div>
            <div className="text-uppercase  px-2 d-flex align-items-center">
                <div className='text-loop'> photo manipulation</div>
                <GiPolarStar className=" ms-2 ms-lg-3"/>
            </div>
            <div className="text-uppercase  px-2 d-flex align-items-center">
                <div className='text-loop'>development</div>
                <GiPolarStar className=" ms-2 ms-lg-3"/>
            </div>
        </Marquee>
    )
}

export default TextLoop