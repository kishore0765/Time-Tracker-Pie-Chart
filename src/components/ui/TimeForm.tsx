import { Input } from "./input"
import { Button } from "./button"
import { useState } from "react";

interface Props {
    onAdd: (activity: string, hours: number, color?: string) => void;
}

const TimeForm = ({onAdd}: Props) => {
    const [activity, setActivity] = useState("");
    const [hours, setHours] = useState("");
    const [color, setColor] = useState("#36A2EB");

    const handleSubmit = () => {
        if (!activity.trim() || !hours) return alert("Please fill in all fields.");
        onAdd(activity, Number(hours), color);
        setActivity("");
        setHours("");
        setColor("#36A2EB");
    }

    return (
        <div className="space-y-3">
            <Input
                placeholder="Activity (eg. Coding, Sleep, Reading)"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
            />

            <Input
                type="number"
                placeholder="Hours (e.g., 8)"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
            />

            <div className="flex items-center gap-2">
            <label className="text-sm">Color:</label>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border">
                <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div
                className="w-full h-full"
                style={{ backgroundColor: color }}
                />
            </div>
            </div>


            <Button className="w-full" onClick={handleSubmit}>
                Add Activity
            </Button>
        </div>
    )
}

export default TimeForm;
