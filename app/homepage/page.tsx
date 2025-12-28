import HeroBanner from "./sections/HeroBanner";
import Barrier from "./sections/Barrier";
import Service from "./sections/Service";
import Profile from "./sections/profile";

export default function HomePage() {
    return (
        <div className="w-full">
            <HeroBanner />
            <Barrier />
            <Service />
            <Profile />
        </div>
    );
}

