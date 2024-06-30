'use client';
import { Bar } from "react-chartjs-2";
import { MeiosDeReserva } from "../data/MockData";

function BarChart() {
    return (
        <Bar
            data={{
                labels: MeiosDeReserva.map(data => data.label),
                datasets: [
                    {
                        label: "Reservas",
                        data: MeiosDeReserva.map(data => data.value),
                        backgroundColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            "rgba(43, 255, 13, 0.8)",
                        ],
                        borderRadius: 5,
                    },
                ],
            }}
            options={{
                plugins: {
                    title: {
                        text: "Meios de Reservas",
                        display: true,
                    },
                },
            }}
        />
    );
}

export default BarChart;
