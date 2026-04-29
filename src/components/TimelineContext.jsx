import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

const initialEntries = [
  { id: 1, type: "meetup", friendName: "Tom Baker", date: "2026-03-29", title: "Meetup with Tom Baker" },
  { id: 2, type: "text", friendName: "Sarah Chen", date: "2026-03-28", title: "Text with Sarah Chen" },
  { id: 3, type: "meetup", friendName: "Olivia Martinez", date: "2026-03-26", title: "Meetup with Olivia Martinez" },
  { id: 4, type: "video", friendName: "Aisha Patel", date: "2026-03-22", title: "Video with Aisha Patel" },
  { id: 5, type: "meetup", friendName: "Sarah Chen", date: "2026-03-21", title: "Meetup with Sarah Chen" },
  { id: 6, type: "call", friendName: "Marcus Johnson", date: "2026-03-18", title: "Call with Marcus Johnson" },
  { id: 7, type: "meetup", friendName: "Aisha Patel", date: "2026-03-17", title: "Meetup with Aisha Patel" },
  { id: 8, type: "text", friendName: "Olivia Martinez", date: "2026-03-13", title: "Text with Olivia Martinez" },
  { id: 9, type: "call", friendName: "Lisa Nakamura", date: "2026-03-11", title: "Call with Lisa Nakamura" },
  { id: 10, type: "call", friendName: "Sarah Chen", date: "2026-03-07", title: "Call with Sarah Chen" },
  { id: 11, type: "video", friendName: "Marcus Johnson", date: "2026-03-09", title: "Video with Marcus Johnson" },
  { id: 12, type: "video", friendName: "Ryan O'Brien", date: "2026-02-24", title: "Video with Ryan O'Brien" },
];

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(initialEntries);

  const addEntry = (type, friendName) => {
    const today = new Date().toISOString().split("T")[0];
    const newEntry = {
      id: Date.now(),
      type,
      friendName,
      date: today,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friendName}`,
    };
    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  return useContext(TimelineContext);
}