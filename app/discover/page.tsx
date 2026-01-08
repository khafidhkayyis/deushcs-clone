import React from "react";
import BarrierName from "./sections/barrierName";
// import BannerVideo from "./sections/bannerVideo";
import Fitures from "./sections/fitures";
import Benefits from "./sections/benefits";

export default function DiscoverPage() {
    return (
        <div className="w-full">
            <BarrierName index={0} />
            <BarrierName index={1} />
            {/* <BannerVideo /> */}
            <Fitures />
            <Benefits />
        </div>
    );
}


