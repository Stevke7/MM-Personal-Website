import Marquee from "react-fast-marquee";
import {GiPolarStar} from "react-icons/gi";

function TextLoop() {
    return (
        <Marquee pauseOnHover={true} speed={80} gradient={false}
                 className="w-100  cursor-pointer marquee py-4 d-flex align-items-center "
                 direction={"right"}>
            <div className="text-uppercase px-2  d-flex align-items-center">
                video editing
                <GiPolarStar className="ms-3"/>
            </div>
            <div className="text-uppercase px-2 d-flex align-items-center">
                branding
                <GiPolarStar className="ms-3"/>
            </div>
            <div className="text-uppercase px-2 d-flex align-items-center">
                ui/ux
                <GiPolarStar className="ms-3"/>
            </div>
            <div className="text-uppercase px-2 d-flex align-items-center">
                web design
                <GiPolarStar className="ms-3"/>
            </div>
            <div className="text-uppercase px-2 d-flex align-items-center">
                motion graphics
                <GiPolarStar className="ms-3"/>
            </div>
            <div className="text-uppercase  px-2 d-flex align-items-center">
                photo manipulation
                <GiPolarStar className="ms-3"/>
            </div>
            <div className="text-uppercase  px-2 d-flex align-items-center">
                development
                <GiPolarStar className="ms-3"/>
            </div>
        </Marquee>
    )
}

export default TextLoop