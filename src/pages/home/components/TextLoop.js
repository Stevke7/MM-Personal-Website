import Marquee from "react-fast-marquee";
import {GiPolarStar} from "react-icons/gi";

function TextLoop() {
    return (
        <Marquee pauseOnHover={true} speed={80} gradient={false}
                 className="w-100 marquee py-4 d-flex align-items-center "
                 direction={"right"}>
            <div className="text-uppercase px-3  d-flex align-items-center">
                video editing
                <GiPolarStar className="mx-3"/>
            </div>
            <div className="text-uppercase px-3 d-flex align-items-center">
                branding
                <GiPolarStar className="mx-3"/>
            </div>
            <div className="text-uppercase px-3 d-flex align-items-center">
                ui/ux
                <GiPolarStar className="mx-3"/>
            </div>
            <div className="text-uppercase px-3 d-flex align-items-center">
                web design
                <GiPolarStar className="mx-3"/>
            </div>
            <div className="text-uppercase px-3 d-flex align-items-center">
                motion graphics
                <GiPolarStar className="mx-3"/>
            </div>
            <div className="text-uppercase  px-3 d-flex align-items-center">
                photo manipulation
                <GiPolarStar className="mx-3"/>
            </div>
        </Marquee>
    )
}

export default TextLoop