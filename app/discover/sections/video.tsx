"use client";

import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

const videoFileName = encodeURI("/discover/video/kompres2.mp4");

export default function Video() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<Player | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        let player: Player | null = null;

        if (videoRef.current && !playerRef.current) {
            player = videojs(videoRef.current, {
                controls: true,
                autoplay: true,
                muted: true,
                loop: true,
                fluid: true,
                responsive: true,
                playbackRates: [0.5, 1, 1.25, 1.5, 2],
                preload: "auto",
            }, () => {
                console.log("Video.js player is ready");
            });

            playerRef.current = player;

            player.on("error", () => {
                const error = player?.error();
                console.error("Video error:", error);
                if (error) {
                    console.error("Error code:", error.code);
                    console.error("Error message:", error.message);
                    if (error.code === 4) {
                        setHasError(true);
                    }
                }
            });

            player.on("loadstart", () => {
                console.log("Video load started");
                setHasError(false);
            });

            player.on("loadeddata", () => {
                console.log("Video loaded");
                setHasError(false);
            });

            player.on("canplay", () => {
                console.log("Video can play");
                setHasError(false);
            });
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full">
            {hasError && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <p className="text-yellow-800 font-semibold mb-2">Video Format Not Supported</p>
                    <p className="text-yellow-700 text-sm">
                        The .mov format is not supported by most browsers. Please convert the video to MP4 format.
                        You can use online converters or install ffmpeg and run:
                    </p>
                    <code className="block bg-yellow-100 p-2 rounded mt-2 text-xs overflow-x-auto">
                        ffmpeg -i &quot;Screen Recording 2026-01-13 at 14.36.24.mov&quot; -c:v libx264 -c:a aac -movflags +faststart &quot;Screen Recording 2026-01-13 at 14.36.24.mp4&quot;
                    </code>
                </div>
            )}
            <div data-vjs-player>
                <video
                    ref={videoRef}
                    className="video-js vjs-default-skin vjs-big-play-centered w-full"
                    preload="auto"
                    playsInline
                >
                    <source src={videoFileName} type="video/quicktime" />
                    <source src={videoFileName} type="video/mp4" />
                    <p className="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noopener noreferrer">
                            supports HTML5 video
                        </a>
                        .
                    </p>
                </video>
            </div>
        </div>
    );
}

