'use client';
import { Line } from "react-chartjs-2";
import { RevenueData } from "../data/MockData";

function LineChart() {
    return (
        <Line
            data={{
                labels: RevenueData.map(data => data.label),
                datasets: [
                    {
                        label: "Ganho",
                        data: RevenueData.map(data => data.revenue),
                        backgroundColor: "#2eb82e",
                        borderColor: "#2eb82e",
                    },
                    {
                        label: "Custo",
                        data: RevenueData.map(data => data.cost),
                        backgroundColor: "#ff4d4d",
                        borderColor: "#ff4d4d",
                    },
                ],
            }}
            options={{
                elements: {
                    line: {
                        tension: 0.5,
                    },
                },
                plugins: {
                    title: {
                        text: "Ganhos e Custos Mensais",
                        display: true,
                    },
                },
            }}
        />
    );
}

export default LineChart;