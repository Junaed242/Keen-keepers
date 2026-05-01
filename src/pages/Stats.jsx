import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { useTimeline } from "../components/TimelineContext";

const COLORS = ["#7c3aed", "#1e3a2f", "#22c55e"];

export default function Stats() {
  const { entries } = useTimeline();

  const counts = entries.reduce(
    (acc, e) => {
      if (e.type === "call")  acc.Call++;
      if (e.type === "text")  acc.Text++;
      if (e.type === "video") acc.Video++;
      return acc;
    },
    { Call: 0, Text: 0, Video: 0 }
  );

  const data = [
    { name: "Text",  value: counts.Text  },
    { name: "Call",  value: counts.Call  },
    { name: "Video", value: counts.Video },
  ].filter((d) => d.value > 0);

  return (
    <div className="mx-7 md:mx-20 py-10">
      <h1 className="font-display text-3xl font-bold mb-8">Friendship Analytics</h1>
      <div className="card bg-base-100 border border-base-200">
        <div className="card-body">
          <h2 className="text-sm font-semibold text-slate-400 mb-4">By Interaction Type</h2>
          {data.length === 0 ? (
            <div className="py-16 text-center text-slate-400">
              No interaction data yet. Log some check-ins!
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={130}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value} interactions`, name]} />
                <Legend iconType="circle" iconSize={8} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}