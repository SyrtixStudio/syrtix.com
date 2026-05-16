import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export default function ReelPlayer({ videoUrl, thumbnail, title, description, instagramUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error("Video play failed:", error);
          setIsPlaying(false);
        });
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full max-w-[320px] lg:max-w-[360px] aspect-[9/16] bg-black overflow-hidden shadow-2xl group mx-auto my-12 border border-white/10">
      {/* Media Element */}
      {videoUrl ? (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnail}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          onClick={togglePlay}
        />
      ) : (
        <img 
          src={thumbnail} 
          alt="Instagram Post" 
          className="w-full h-full object-cover opacity-90"
        />
      )}

      {/* Overlay UI */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none"></div>

      {/* Top Info (Instagram Header - Syrtix Style) */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
          <img src="/img/logos/logo6.png" alt="Syrtix" className="w-5 h-5 bg-primary object-contain p-0.5" />
          <span className="text-[12px] font-bold text-white tracking-wide uppercase">@syrtixstudio</span>
        </div>
        {videoUrl && (
          <button 
            onClick={toggleMute}
            className="p-2 bg-black/60 backdrop-blur-md pointer-events-auto hover:bg-primary transition-colors border border-white/10"
          >
            {isMuted ? <VolumeX size={16} className="text-white" /> : <Volume2 size={16} className="text-white" />}
          </button>
        )}
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <h4 className="text-white font-bold text-xl mb-2">{title}</h4>
        <p className="text-white/80 text-sm mb-6 line-clamp-2">
          {description}
        </p>

        {instagramUrl ? (
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-primary text-secondary font-bold py-3 px-4 hover:bg-white hover:text-secondary transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] pointer-events-auto uppercase text-sm tracking-wider"
          >
            Ver en Instagram
          </a>
        ) : (
          <div className="w-full h-1 bg-white/20 overflow-hidden">
            <div className="w-1/3 h-full bg-primary animate-pulse"></div>
          </div>
        )}
      </div>

      {/* Center Play Button (Visible when paused and video exists) */}
      {videoUrl && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="w-16 h-16 bg-primary text-secondary flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
            <Play size={32} fill="currentColor" />
          </div>
        </div>
      )}
    </div>
  );
}
