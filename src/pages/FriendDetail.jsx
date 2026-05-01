import { useParams, useNavigate } from "react-router";
import { Phone, MessageSquare, Video, Clock, Archive, Trash2, Edit, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { useTimeline } from "../components/TimelineContext";
import friendsData from "../data/friends.json";
import NotFound from "./NotFound";

const statusConfig = {
  "overdue":    { label: "Overdue",    badge: "badge-error"   },
  "almost due": { label: "Almost Due", badge: "badge-warning" },
  "on-track":   { label: "On Track",   badge: "badge-success" },
};

export default function FriendDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addEntry } = useTimeline();

  const friend = friendsData.find((f) => f.id === parseInt(id));

  if (!friend) return <NotFound />;

  const status = statusConfig[friend.status] || statusConfig["on-track"];

  const handleCheckIn = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name} logged!`, {
      icon: type === "call" ? "📞" : type === "text" ? "💬" : "🎥",
    });
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
    });

  return (
    <div className="md:mx-20 px-4 mx-5 py-8">
      <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm gap-2 mb-6">
        <ArrowLeft size={15} /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body items-center text-center">
              <div className="avatar mb-2">
                <div className="w-24 rounded-full ring ring-base-200">
                  <img
                    src={friend.picture}
                    alt={friend.name}
                  />
                </div>
              </div>
              <h1 className="font-display text-2xl font-bold">{friend.name}</h1>
              <span className={`badge ${status.badge}`}>{status.label}</span>
              <div className="flex flex-wrap gap-1.5 justify-center mt-1">
                {friend.tags.map((tag) => (
                  <span key={tag} className="badge badge-ghost badge-sm uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 text-sm italic mt-2">"{friend.bio}"</p>
              <p className="text-slate-400 text-xs">Preferred: email</p>
              <p className="text-slate-400 text-xs">{friend.email}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-2 gap-1">
              <button className="btn btn-ghost btn-sm justify-start gap-3">
                <Clock size={15} className="text-slate-400" /> Snooze 2 Weeks
              </button>
              <div className="divider my-0"></div>
              <button className="btn btn-ghost btn-sm justify-start gap-3">
                <Archive size={15} className="text-slate-400" /> Archive
              </button>
              <div className="divider my-0"></div>
              <button className="btn btn-ghost btn-sm justify-start gap-3 text-error hover:bg-error/10">
                <Trash2 size={15} /> Delete
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="card bg-base-100 border border-base-200">
              <div className="card-body items-center text-center p-4">
                <p className="text-2xl font-bold">{friend.days_since_contact}</p>
                <p className="text-xs text-slate-400">Days Since Contact</p>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-200">
              <div className="card-body items-center text-center p-4">
                <p className="text-2xl font-bold">{friend.goal}</p>
                <p className="text-xs text-slate-400">Goal (Days)</p>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-200">
              <div className="card-body items-center text-center p-4">
                <p className="text-base font-bold">{formatDate(friend.next_due_date)}</p>
                <p className="text-xs text-slate-400">Next Due</p>
              </div>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Relationship Goal</h3>
                <button className="btn btn-outline btn-xs gap-1">
                  <Edit size={11} /> Edit
                </button>
              </div>
              <p className="text-sm mt-1">
                Connect every <span className="font-bold">{friend.goal} days</span>
              </p>
            </div>
          </div>

          {/* Quick Check-In */}
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-5">
              <h3 className="font-semibold mb-3">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-3">
                <button onClick={() => handleCheckIn("call")} className="btn btn-outline flex-col h-20 gap-2">
                  <Phone size={20} />
                  <span className="text-xs">Call</span>
                </button>
                <button onClick={() => handleCheckIn("text")} className="btn btn-outline flex-col h-20 gap-2">
                  <MessageSquare size={20} />
                  <span className="text-xs">Text</span>
                </button>
                <button onClick={() => handleCheckIn("video")} className="btn btn-outline flex-col h-20 gap-2">
                  <Video size={20} />
                  <span className="text-xs">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}