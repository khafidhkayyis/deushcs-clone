import HeroBanner from "./sections/HeroBanner";
import Barrier from "./sections/Barrier";
import Service from "./sections/Service";

export default function HomePage() {
    return (
        <div className="w-full">
            <HeroBanner />
            <Barrier />
            <Service />
        </div>
    );
}

