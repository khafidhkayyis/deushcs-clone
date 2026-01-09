import HeroBanner from "./sections/heroBanner";
import BarrierName from "./sections/barrierName";
import CoreValue from "./sections/coreValue";


export default function EagleVisionPage() {
    return (
        <div className="w-full">
            <HeroBanner />
            <BarrierName index={0} />
            <CoreValue />
        </div>
    );
}

