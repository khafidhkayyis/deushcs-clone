import HeroBanner from "./sections/heroBanner";
import BarrierName from "./sections/barrierName";


export default function EagleVisionPage() {
    return (
        <div className="w-full">
            <HeroBanner />
            <BarrierName index={0} />
        </div>
    );
}

