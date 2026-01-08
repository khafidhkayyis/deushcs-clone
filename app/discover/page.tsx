import React from "react";
import BarrierName from "./sections/barrierName";
// import BannerVideo from "./sections/bannerVideo";
import Fitures from "./sections/fitures";
import Benefits from "./sections/benefits";
import KickStart from "./sections/klickStart";

export default function DiscoverPage() {
    return (
        <div className="w-full">
            <BarrierName index={0} />
            <BarrierName index={1} />
            {/* <BannerVideo /> */}
            <Fitures />
            <Benefits />
            <KickStart />
            <BarrierName index={2} />
        </div>
    );
}


