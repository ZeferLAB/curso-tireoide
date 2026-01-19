'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface YouTubeVSLPlayerProps {
    videoId: string;
    thumbnailUrl?: string;
}

export function YouTubeVSLPlayer({ videoId, thumbnailUrl }: YouTubeVSLPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Default thumbnail if none provided
    const poster = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

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
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&controls=0&showinfo=0&modestbranding=1&disablekb=1&iv_load_policy=3&fs=0`}
                        title="YouTube VSL"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                    />

                    {/* Optional: Transparent layer to block clicks on video (except pause) if desired.
                        For now, leaving accessible interaction as controls=0 already hides the bar. 
                    */}
                </div>
            )}
        </div>
    );
}
