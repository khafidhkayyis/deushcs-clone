import React from "react";
import BarrierName from "./sections/barrierName";
// import BannerVideo from "./sections/bannerVideo";
import Fitures from "./sections/fitures";
import Benefits from "./sections/benefits";
import KickStart from "./sections/klickStart";
import Gamified from "./sections/gamified";
import Video from "./sections/video";

export default function DiscoverPage() {
    return (
        <div className="w-full">
            <BarrierName index={0} />
            <Video />
            <BarrierName index={1} />
            {/* <BannerVideo /> */}
            <Fitures />
            <Benefits />
            <KickStart />
            <BarrierName index={2} />
            <Gamified />
        </div>
    );
}


