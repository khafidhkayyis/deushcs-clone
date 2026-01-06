import WhoWeAre from "./sections/WhoWeAre";
import BarrierName from "./sections/barrierName";
import OurProcess from "./sections/ourProcess";


export default function WhoWeArePage() {
    return (
        <div className="w-full">
            <WhoWeAre />
            <BarrierName />
            <OurProcess />
        </div>
    );
}

