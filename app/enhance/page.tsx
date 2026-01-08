import HeroBanner from "./sections/heroBanner";
import BarrierName from "./sections/barrierName";
import UniqueValue from "./sections/uniqueValue";
import ClickStart from "./sections/clickstart";
import KeyFeatures from "./sections/keyFeatures";


export default function EnhancePage() {
    return (
        <div className="w-full">
            <HeroBanner />
            <BarrierName index={0} />
            <UniqueValue />
            <ClickStart />
            <BarrierName index={1} />
            <KeyFeatures />
        </div>
    );
}

