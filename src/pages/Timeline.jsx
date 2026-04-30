import { useState } from "react";
import { Star } from "lucide-react";
import { useTimeline } from "../components/TimelineContext";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const typeConfig = {
  call:   { icon: <img src={callIcon}  alt="call"  className="w-4 h-4" />, color: "bg-green-50",   label: "Call"   },
  text:   { icon: <img src={textIcon}  alt="text"  className="w-4 h-4" />, color: "bg-blue-50",    label: "Text"   },
  video:  { icon: <img src={videoIcon} alt="video" className="w-4 h-4" />, color: "bg-purple-50",  label: "Video"  },
  meetup: { icon: <Star size={15} />,                                       color: "bg-yellow-50",  label: "Meetup" },
};

const filterOptions = ["All", "Call", "Text", "Video", "Meetup"];

export default function Timeline() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? entries
      : entries.filter((e) => e.type.toLowerCase() === filter.toLowerCase());

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      month: "long", day: "numeric", year: "numeric",
    });

  return (
    <div className="mx-10 md:mx-20 py-10">
      <h1 className="font-display text-3xl font-bold mb-6">Timeline</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setFilter(opt)}
            className={`btn btn-sm ${filter === opt ? "btn-neutral" : "btn-ghost border border-base-300"}`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Entries */}
      <div className="card lg:pr-16 bg-base-100 border border-base-200">
        {filtered.length === 0 ? (
          <div className="card-body items-center py-16 text-slate-400">
            No entries found.
          </div>
        ) : (
          <ul className="divide-y divide-base-200">
            {filtered.map((entry) => {
              const config = typeConfig[entry.type] || typeConfig.call;
              return (
                <li key={entry.id} className="flex items-center gap-4 px-5 py-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${config.color}`}>
                    {config.icon}
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold">{config.label}</span>{" "}
                      <span className="text-base-content/60">with {entry.friendName}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{formatDate(entry.date)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}