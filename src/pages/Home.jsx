import { useState, useEffect } from "react";
import { Plus, Users, CheckCircle, AlertCircle, Zap } from "lucide-react";
import FriendCard from "../components/FriendCard";
import friendsData from "../data/friends.json";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const stats = {
    total: friends.length,
    onTrack: friends.filter((f) => f.status === "on-track").length,
    needAttention: friends.filter((f) => f.status === "overdue" || f.status === "almost due").length,
    interactions: 12,
  };

  const summaryCards = [
    { label: "Total Friends",           value: stats.total,         icon: <Users size={20} />,       color: "text-neutral"   },
    { label: "On Track",                value: stats.onTrack,       icon: <CheckCircle size={20} />, color: "text-success"   },
    { label: "Need Attention",          value: stats.needAttention, icon: <AlertCircle size={20} />, color: "text-warning"   },
    { label: "Interactions This Month", value: stats.interactions,  icon: <Zap size={20} />,         color: "text-secondary" },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="bg-base-100 border-b border-base-200 py-14 px-4 text-center">
        <h1 className="font-display text-4xl font-bold mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-base-content/60 max-w-md mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button
          className="btn gap-2 text-white"
          style={{ backgroundColor: "#1e3a2f", borderColor: "#1e3a2f" }}
          onClick={() => alert("Add a Friend — coming soon!")}
        >
          <Plus size={16} /> Add a Friend
        </button>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
          {summaryCards.map((card) => (
            <div key={card.label} className="card bg-base-100 border border-base-200 shadow-sm">
              <div className="card-body items-center text-center p-4">
                <div className={card.color}>{card.icon}</div>
                <p className="text-2xl font-bold">{loading ? "—" : card.value}</p>
                <p className="text-xs text-base-content/50">{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Friends Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="font-display text-2xl font-bold mb-6">Your Friends</h2>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <span className="loading loading-spinner loading-lg" style={{ color: "#1e3a2f" }}></span>
            <p className="text-base-content/50 text-sm">Loading your friends...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}