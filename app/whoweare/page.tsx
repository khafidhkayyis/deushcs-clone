import WhoWeAre from "./sections/WhoWeAre";
import BarrierName from "./sections/barrierName";
import OurProcess from "./sections/ourProcess";
import OurValues from "./sections/ourValues";
import TeamCore from "./sections/teamCore";


export default function WhoWeArePage() {
    return (
        <div className="w-full">
            <WhoWeAre />
            <BarrierName index={0} />
            <OurProcess />
            <OurValues />
            <TeamCore />
        </div>
    );
}

