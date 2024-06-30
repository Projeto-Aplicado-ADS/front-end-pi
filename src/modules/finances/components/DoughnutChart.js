'use client';
import { Doughnut } from "react-chartjs-2";
import { SourceData } from "../data/MockData";

function DoughnutChart() {
    return (
        <Doughnut
            data={{
                labels: SourceData.map(data => data.label),
                datasets: [
                    {
                        label: "Método de Pagamento",
                        data: SourceData.map(data => data.value),
                        backgroundColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            "rgba(59, 255, 9, 0.8)",
                        ],
                        borderColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            "rgba(43, 255, 13, 0.8)",
                        ],
                    },
                ],
            }}
            options={{
                plugins: {
                    title: {
                        text: "Meios de Pagamento",
                        display: true,
                    },
                },
            }}
        />
    );
}

export default DoughnutChart;
