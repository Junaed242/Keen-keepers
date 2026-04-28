import { useNavigate } from "react-router";

const statusConfig = {
  "overdue":    { label: "Overdue",    badge: "badge-error"   },
  "almost due": { label: "Almost Due", badge: "badge-warning" },
  "on-track":   { label: "On Track",   badge: "badge-success" },
};

export default function FriendCard({ friend }) {
  const navigate = useNavigate();
  const status = statusConfig[friend.status] || statusConfig["on-track"];

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="card bg-base-100 border border-base-200 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
    >
      <div className="card-body items-center text-center p-5">
        <div className="avatar mb-1">
          <div className="w-16 rounded-full ring ring-base-200">
            <img
              src={friend.picture}
              alt={friend.name}
            />
          </div>
        </div>
        <h3 className="card-title text-sm">{friend.name}</h3>
        <p className="text-xs text-base-content/50">{friend.days_since_contact}d ago</p>
        <div className="flex flex-wrap gap-1 justify-center">
          {friend.tags.map((tag) => (
            <span key={tag} className="badge badge-ghost badge-sm uppercase text-xs">
              {tag}
            </span>
          ))}
        </div>
        <span className={`badge ${status.badge} badge-sm mt-1`}>
          {status.label}
        </span>
      </div>
    </div>
  );
}