
import { useState } from "react";
import GreetingCard from "../components/GreetingCard";
import PremiumModal from "../components/PremiumModal";

const templates = [
  {
    id: 1,
    title: "Birthday",
    premium: false,
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3"
  },
  {
    id: 2,
    title: "Festival",
    premium: true,
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176"
  }
];

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [selected, setSelected] = useState(templates[0]);
  const [showPremium, setShowPremium] = useState(false);

  const selectTemplate = (item) => {
    if (item.premium) {
      setShowPremium(true);
      return;
    }

    setSelected(item);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Personalized Greetings
        </h1>

        <div className="flex items-center gap-3">
          <img
            src={user.photo}
            className="w-12 h-12 rounded-full"
          />

          <h2>{user.name}</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        {templates.map((item) => (
          <div
            key={item.id}
            onClick={() => selectTemplate(item)}
            className="bg-white rounded-xl overflow-hidden shadow cursor-pointer"
          >
            <img
              src={item.image}
              className="h-40 w-full object-cover"
            />

            <div className="p-3">
              <div className="flex justify-between">
                <h3>{item.title}</h3>
                <span>
                  {item.premium ? "Premium" : "Free"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <GreetingCard template={selected} user={user} />

      {showPremium && (
        <PremiumModal close={() => setShowPremium(false)} />
      )}
    </div>
  );
}
