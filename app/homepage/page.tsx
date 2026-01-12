import HeroBanner from "./sections/HeroBanner";
import Barrier from "./sections/Barrier";
import Service from "./sections/Service";
import Profile from "./sections/profile";
import Smarter from "./sections/Smarter";
import Smart from "./sections/Smart";
import Empower from "./sections/Empower";
import Dedicate from "./sections/Dedicate";
import Clients from "./sections/Clients";
import Patners from "./sections/Patners";
import Scrolllogo from "./sections/Scrolllogo";
import Transformational from "./sections/Transformational";
import Pillars from "./sections/Pillars";

export default function HomePage() {
    return (
        <div className="w-full" style={{ backgroundColor: "#f8f7f3" }}>
            <HeroBanner />
            <Barrier index={0} />
            <Service />
            <Profile />
            <Smarter />
            <Smart />
            <Empower />
            <Dedicate />
            <Barrier index={1} />
            <Clients />
            <Patners />
            <Scrolllogo />
            <Transformational />
            <Pillars />
        </div>
    );
}

