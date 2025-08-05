import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: { activity: string, hours: number, color?: string }[];
}

const TimeChart = ({ data }: Props) => {
    const chartData = {
        labels: data.map((d) => d.activity),
        datasets: [
            {
                label: "Hours",
                data: data.map((d) => d.hours),
                backgroundColor: data.map((d) => d.color || '#36A2EB'),
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={chartData} />;
}

export default TimeChart;
