import HeroBanner from "./sections/heroBanner";
import BarrierName from "./sections/barrierName";
import CoreValue from "./sections/coreValue";
import WhyTrust from "./sections/whyTrust";
import Quote from "./sections/quote";
import Benefits from "./sections/businessBenefits";
import ClickStart from "./sections/clickStart";



export default function EagleVisionPage() {
    return (
        <div className="w-full">
            <HeroBanner />
            <BarrierName index={0} />
            <CoreValue />
            <BarrierName index={1} />
            <WhyTrust />
            <Quote />
            <BarrierName index={2} />
            <Benefits />
            <ClickStart />
        </div>
    );
}

