"use client";

import { ThreeDCard } from "../components/cards";
import { useState, useEffect } from "react";

export default function Home() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const updateVideoSource = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setVideoSrc("/videos/morning.mp4");
    } else if (hour >= 12 && hour < 18) {
      setVideoSrc("/videos/afternoon.mp4");
    } else if (hour >= 18 && hour < 22) {
      setVideoSrc("/videos/evening.mp4");
    } else {
      setVideoSrc("/videos/night.mp4");
    }
  };

  useEffect(() => {
    // Set the initial video source
    updateVideoSource();

    // Check and update the video source every minute
    const interval = setInterval(updateVideoSource, 60000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Handle video load completion
  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  // Handle video error (fallback to image)
  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Loader */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <div className="loader"></div>{" "}
        </div>
      )}

      {/* Render video or image if videoSrc is set */}
      {videoSrc && !videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={handleVideoLoad} // Trigger when video is ready
          onError={handleVideoError} // Fallback in case of error
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback image if video fails */}
      {videoError && (
        <img
          src={`/backgrounds/${videoSrc?.split("/").pop()?.replace(".mp4", ".jpg")}`}
          alt="Background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      )}

      {/* Main Content */}
      {!isLoading && (
        <main className="p-6 flex flex-col items-center justify-center text-white min-h-screen">
          <h2 className="text-3xl font-semibold mb-6 translate-y-5 text-gray-900 dark:text-gray-100 bg-white bg-opacity-0 dark:bg-black dark:bg-opacity-30 backdrop-blur-lg p-6 rounded-3xl shadow-lg">
            Welcome to the RPi Server Dashboard
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 translate-y-5">
            <ThreeDCard
              title="Main Dashboard"
              description="Go to the main server dashboard - CasaOS"
              imageSrc="https://www.casaos.io/images/casaos_dee1f011.jpg"
              imageAlt="casaos"
              link="http://rpi.local:6060"
            />
            <ThreeDCard
              title="File Server"
              description="Go to your File Server"
              imageSrc="https://www.element-it.com/images/screenshots/httpcommander/webp/3.webp"
              imageAlt="filebrowser"
              link="http://rpi.local:7070"
            />
            <ThreeDCard
              title="Media Server"
              description="Watch or Stream Movies & TV Shows from your Server"
              imageSrc="https://images4.alphacoders.com/134/thumb-1920-1348032.png"
              imageAlt="jellyfin"
              link="http://rpi.local:8096"
            />
          </div>
        </main>
      )}
    </div>
  );
}