import React, { useState, useEffect, useRef } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Globe,
  Play,
  Pause,
  Instagram,
} from "lucide-react";
import img1 from "./Img/1.jpg";
import img2 from "./Img/2.jpg";
import img3 from "./Img/3.jpg";
import img4 from "./Img/4.jpg";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const profileImages = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Playback issue:", err));
      }
    }
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/yatharth-shah15/", "_blank");
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-gray-800 font-sans bg-red">
      {/* Ultra-light background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue to-yellow" />

      {/* Soft blurry blobs */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-purple-100/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-100/15 rounded-full blur-[100px] animate-pulse delay-1000" />

      {/* Audio */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/Papa Kehte Hain.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-xl mx-auto">
          <div
            className="relative rounded-[2rem] p-10 text-center border"
            style={{
              background: "rgba(255,255,255,0.55)", // lighter glass effect
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
            }}
          >
            {/* Image Carousel */}
            <div className="mb-10 relative">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto flex items-center justify-center">
                <img
                  src={profileImages[currentImageIndex]}
                  alt={`Yatharth Shah ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {profileImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full ${
                        currentImageIndex === idx ? "scale-125" : "opacity-60"
                      } transition-all duration-300`}
                      style={{
                        background:
                          currentImageIndex === idx
                            ? "#ec4899"
                            : "rgba(0,0,0,0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Audio Button */}
            <div className="mb-6">
              <button
                onClick={toggleMusic}
                className="p-4 rounded-full border shadow-sm bg-white/60 hover:scale-110 transition"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-pink-600" />
                ) : (
                  <Play className="w-6 h-6 text-pink-600" />
                )}
              </button>
            </div>

            {/* Name + Tagline */}
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Yatharth Shah
            </h1>
            <p className="text-lg text-gray-700 font-medium mb-1">
              Building bugs professionally (and fixing a few too) 🐞
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Meet the bug whisperer who speaks fluent JavaScript 👨‍💻✨
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/Yatharth2001" target="_blank">
                <Github className="w-6 h-6 text-gray-700 hover:text-black transition" />
              </a>
              <a href="https://www.instagram.com/yatharth_1503" target="_blank">
                <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-600 transition" />
              </a>
              <a href="mailto:yatharthshah00@gmail.com">
                <Mail className="w-6 h-6 text-red-500 hover:text-red-600 transition" />
              </a>
              <a
                href="https://yatharth-shah-portfolio.vercel.app/"
                target="_blank"
              >
                <Globe className="w-6 h-6 text-green-600 hover:text-green-700 transition" />
              </a>
            </div>

            {/* LinkedIn Button */}
            <button
              onClick={handleLinkedInClick}
              className="group font-semibold py-3 px-8 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 text-black shadow-md hover:scale-105 transition"
            >
              <span className="flex items-center justify-center gap-2">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </span>
            </button>

            {/* Footer */}
            <div className="mt-6 text-sm text-gray-600">
              Ready to connect? Let’s build something joyful ⚡
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
