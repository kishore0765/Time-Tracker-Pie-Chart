import TimeForm from "@/components/ui/TimeForm"
import { useEffect, useState } from "react";
import TimeChart from "@/components/ui/TimeChart";

const STORAGE_KEY = "tracked_activities";

const Home = () => {
    const [data, setData] = useState<{activity: string, hours: number, color?: string}[]>([]);
    const [totalHours, setTotalHours] = useState(0);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setData(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        const total = data.reduce((sum, d) => sum + d.hours, 0);
        setTotalHours(total);
    }, [data]);

    const handleAdd = (activity: string, hours: number, color?: string) => {
        setData(prev => [...prev, { activity, hours, color }]);
    }

    return (
        <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow space-y-6">
            <h1 className="text-2xl font-bold "> ⏱ Time Tracker</h1>
            <TimeForm onAdd={handleAdd} />
            <div className="text-sm">
                <strong>Total Hours:</strong> {totalHours}
                {totalHours > 24 && (
                    <p className="text-red-500 font-medium">Warning: You've tracked more than 24 hours!</p>
                )}
            </div>
            <TimeChart data={data} />
        </div>
    )
}

export default Home;
