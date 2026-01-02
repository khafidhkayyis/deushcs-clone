import HeroBanner from "./sections/HeroBanner";
import Barrier from "./sections/Barrier";
import Service from "./sections/Service";
import Profile from "./sections/profile";
import Smarter from "./sections/Smarter";
import Smart from "./sections/Smart";
import Empower from "./sections/Empower";
import Dedicate from "./sections/Dedicate";
import Sponsored from "./sections/sponsored";

export default function HomePage() {
    return (
        <div className="w-full">
            <HeroBanner />
            <Barrier />
            <Service />
            <Profile />
            <Smarter />
            <Smart />
            <Empower />
            <Dedicate />
            <Sponsored />
        </div>
    );
}

