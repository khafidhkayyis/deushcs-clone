import HeroBanner from "./sections/heroBanner";
import BarrierName from "./sections/barrierName";
import CoreValue from "./sections/coreValue";
import WhyTrust from "./sections/whyTrust";


export default function EagleVisionPage() {
    return (
        <div className="w-full">
            <HeroBanner />
            <BarrierName index={0} />
            <CoreValue />
            <BarrierName index={1} />
            <WhyTrust />
        </div>
    );
}

