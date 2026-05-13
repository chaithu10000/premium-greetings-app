
import { useRef } from "react";
import html2canvas from "html2canvas";

export default function GreetingCard({ template, user }) {
  const cardRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(cardRef.current);

    const link = document.createElement("a");
    link.download = "greeting-card.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Greeting Card",
        text: "Check out my personalized greeting!"
      });
    } else {
      alert("Sharing not supported on this device.");
    }
  };

  return (
    <div>
      <div
        ref={cardRef}
        className="relative w-[380px] h-[380px] rounded-2xl overflow-hidden shadow-xl"
      >
        <img
          src={template.image}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute bottom-5 left-5 bg-white/90 p-3 rounded-xl flex items-center gap-3">
          <img
            src={user.photo}
            className="w-14 h-14 rounded-full border"
          />

          <div>
            <p className="text-sm">Best Wishes</p>
            <h2 className="font-bold">{user.name}</h2>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white px-5 py-2 rounded-lg"
        >
          Download
        </button>

        <button
          onClick={handleShare}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Share
        </button>
      </div>
    </div>
  );
}
