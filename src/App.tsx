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
  const audioRef = useRef<HTMLAudioElement>(null);

  // Array of profile images - using local images from Img folder
  const profileImages = [img1, img2, img3, img4];

  // Auto-slide images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % profileImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [profileImages.length]);

  // Play/pause music on button click
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            // Autoplay might be blocked by browser
            console.log("Play prevented:", error);
          });
      }
    }
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/yatharth-shah15/", "_blank");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Darker background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d1856] via-[#3b1d3d] to-[#1a2b3a]" />

      {/* Dynamic animated background elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-300/25 to-blue-300/25 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-300/20 to-purple-300/20 rounded-full blur-xl animate-pulse delay-500" />
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-teal-300/20 to-emerald-300/20 rounded-full blur-lg animate-pulse delay-700" />

      {/* Audio element */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/Papa Kehte Hain.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
          {/* Vibrant glassmorphism card container */}
          <div
            className="relative rounded-3xl p-8 text-center border"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 200, 250, 0.2))",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              boxShadow:
                "0 8px 30px rgba(255, 200, 250, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Image Carousel */}
            <div className="mb-8 relative">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto flex items-center justify-center">
                <img
                  src={profileImages[currentImageIndex]}
                  alt={`Yatharth Shah ${currentImageIndex + 1}`}
                  loading="eager"
                  draggable={false}
                  className="w-full h-full rounded-full border-8 shadow-2xl object-cover bg-gray-200 transition-opacity duration-700 opacity-100"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.7)",
                    boxShadow:
                      "0 12px 40px rgba(255, 200, 250, 0.35), 0 0 0 4px rgba(255, 255, 255, 0.25)",
                  }}
                />
                {/* Colorful carousel indicators */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {profileImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "scale-150 shadow-lg" : ""
                      }`}
                      style={{
                        background:
                          index === currentImageIndex
                            ? "linear-gradient(45deg, #8b5cf6, #ec4899)"
                            : "rgba(255, 255, 255, 0.4)",
                        boxShadow:
                          index === currentImageIndex
                            ? "0 2px 8px rgba(236, 72, 153, 0.4)"
                            : "none",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Audio Player */}
            <div className="mb-8 flex justify-center">
              <button
                onClick={toggleMusic}
                className="group relative p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border"
                style={{
                  background: isPlaying
                    ? "linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))"
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 200, 250, 0.15))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: isPlaying
                    ? "0 4px 20px rgba(236, 72, 153, 0.3)"
                    : "0 4px 15px rgba(255, 200, 250, 0.2)",
                }}
              >
                {isPlaying ? (
                  <div className="relative">
                    <Pause className="w-6 h-6 text-purple-700" />
                    {/* Animated sound waves */}
                    <div className="absolute -top-2 -right-2 flex space-x-1">
                      <div
                        className="w-1 h-4 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-1 h-6 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full animate-pulse"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-1 h-3 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full animate-pulse"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                ) : (
                  <Play className="w-6 h-6 text-purple-700 ml-1" />
                )}

                {/* Vinyl disc background effect when playing */}
                {isPlaying && (
                  <div
                    className="absolute inset-0 rounded-full border-2 animate-spin"
                    style={{
                      animationDuration: "3s",
                      borderColor: "rgba(236, 72, 153, 0.4)",
                    }}
                  >
                    <div
                      className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
                      }}
                    />
                  </div>
                )}
              </button>
            </div>

            {/* Name & Funny Tagline */}
            <div className="mb-8">
              <h1
                className="text-3xl font-bold text-gray-800 mb-3"
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)" }}
              >
                Yatharth Shah
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed font-medium mb-2">
                Building bugs professionally (and fixing a few too) 🐞
              </p>
              <p className="text-base text-gray-600">
                Meet the bug whisperer who speaks fluent JavaScript 👨‍💻✨
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              {/* <a
                href="https://www.linkedin.com/in/yatharth-shah15/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(59, 130, 246, 0.1))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </a> */}

              <a
                href="https://github.com/Yatharth2001"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(75, 85, 99, 0.1))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <Github className="w-6 h-6 text-gray-700 group-hover:text-gray-800 transition-colors duration-300" />
              </a>

              <a
                href="https://www.instagram.com/yatharth_1503"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(236, 72, 153, 0.1))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <Instagram className="w-6 h-6 text-pink-600 group-hover:text-pink-700 transition-colors duration-300" />
              </a>

              <a
                href="mailto:yatharthshah00@gmail.com"
                className="group p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(239, 68, 68, 0.1))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <Mail className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
              </a>

              <a
                href="https://yatharth-shah-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(34, 197, 94, 0.1))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <Globe className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
              </a>
            </div>

            {/* Professional LinkedIn Button */}
            <button
              onClick={handleLinkedInClick}
              className="group font-semibold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform active:scale-95 border text-white"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </span>
            </button>

            {/* Playful footer */}
            <div className="mt-6 text-sm text-gray-600 font-medium">
              Ready to connect? Let's build something amazing! ⚡
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
