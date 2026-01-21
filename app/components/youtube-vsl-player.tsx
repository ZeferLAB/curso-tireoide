'use client';

import { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface YouTubeVSLPlayerProps {
    videoId: string;
    thumbnailUrl?: string;
}

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

export function YouTubeVSLPlayer({ videoId, thumbnailUrl }: YouTubeVSLPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef<HTMLDivElement>(null);
    const playerInstanceRef = useRef<any>(null);

    // Default thumbnail if none provided
    const poster = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    useEffect(() => {
        if (!isPlaying) return;

        const loadVideo = () => {
            if (!playerRef.current) return;

            // Prevent creating multiple players
            if (playerInstanceRef.current) return;

            playerInstanceRef.current = new window.YT.Player(playerRef.current, {
                videoId: videoId,
                height: '100%',
                width: '100%',
                playerVars: {
                    autoplay: 1,
                    rel: 0,
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    disablekb: 1,
                    iv_load_policy: 3,
                    fs: 0,
                    playsinline: 1
                },
                events: {
                    onStateChange: (event: any) => {
                        // 0 = YT.PlayerState.ENDED
                        if (event.data === 0) {
                            setIsPlaying(false);
                            // Cleanup player instance
                            if (playerInstanceRef.current) {
                                playerInstanceRef.current.destroy();
                                playerInstanceRef.current = null;
                            }
                        }
                    }
                }
            });
        };

        if (window.YT && window.YT.Player) {
            loadVideo();
        } else {
            // Check if script is already in the DOM
            if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
                const tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
            }

            const existingCallback = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                if (existingCallback) existingCallback();
                loadVideo();
            };
        }

        return () => {
            // Cleanup when unmounting or stopping
            if (playerInstanceRef.current) {
                try {
                    playerInstanceRef.current.destroy();
                } catch (e) {
                    console.error("Error destroying YT player", e);
                }
                playerInstanceRef.current = null;
            }
        };
    }, [isPlaying, videoId]);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto rounded-xl shadow-[0_0_40px_rgba(4,16,33,0.6)] overflow-hidden border border-[#F2B705] bg-slate-900 group aspect-video">
            {!isPlaying ? (
                /* Cover State */
                <div
                    className="absolute inset-0 cursor-pointer group"
                    onClick={handlePlay}
                >
                    {/* Thumbnail Image */}
                    <div className="relative w-full h-full">
                        <Image
                            src={poster}
                            alt="Vídeo de Apresentação"
                            fill
                            className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                            priority
                        />
                    </div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#F2B705] flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(242,183,5,0.6)] transform group-hover:scale-110 transition-transform duration-300 animate-pulse">
                            <Play className="w-6 h-6 lg:w-8 lg:h-8 text-[#041021] fill-current" />
                        </div>

                        <p className="mt-4 font-medium tracking-wide text-xs lg:text-sm text-white drop-shadow-md uppercase opacity-90">
                            Assistir Apresentação
                        </p>
                    </div>
                </div>
            ) : (
                /* Player State */
                <div className="absolute inset-0 w-full h-full bg-black">
                    <div ref={playerRef} className="w-full h-full" />
                </div>
            )}
        </div>
    );
}
