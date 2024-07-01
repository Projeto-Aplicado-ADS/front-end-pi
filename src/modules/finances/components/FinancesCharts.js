'use client';
import { Montserrat } from "next/font/google";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement } from 'chart.js';
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import { RevenueData } from "../data/MockData";
import { useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    ArcElement
);

const dosis = Montserrat({
    weight: "500",
    subsets: ["latin"],
});

function FinancesCharts() {
    const [totalRevenue, setTotalRevenue] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        setTotalRevenue(RevenueData.reduce((total, item) => total + item.revenue, 0))
        setTotalCost(RevenueData.reduce((total, item) => total + item.cost, 0))
    })

    const RealNumberFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <div className={`${dosis.className} text-2xl h-full text-black flex flex-col items-center p-10 space-y-6 bg-gray-200`}>
            <h1 className={`text-2xl text-black`}>Levantamento Financeiro</h1>
            <div className="flex w-full max-w-4xl text-black p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="w-3/5">
                    <LineChart />
                </div>
                <div className="w-2/5 flex items-center justify-center p-4">
                    <p className="text-lg">
                        Acompanhe os ganhos e custos mensais da nossa empresa. Este gráfico ajuda a monitorar o desempenho financeiro ao longo do ano e a tomar decisões estratégicas para otimizar os lucros.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-6 mb-0">
                <div className="w-full md:w-1/2 p-4 bg-gray-100 text-black rounded-lg shadow-md">
                    <DoughnutChart />
                </div>
                <div className="w-full md:w-1/2 p-4 bg-gray-100 text-black rounded-lg shadow-md ">
                    <div className="border-b-2 aling-items-center mb-5">
                        <p className="p-1 flex justify-center">Resumo Financeiro</p>
                        <p className="p-1 flex justify-center">Ganho Bruto:{RealNumberFormat.format(totalRevenue)}</p>
                        <p className="p-1 flex justify-center">Custo Total:{RealNumberFormat.format(totalCost)}</p>
                        <p className="p-1 flex justify-center mb-5">Ganho Líquido:{RealNumberFormat.format(totalRevenue - totalCost)}</p>
                    </div>
                    <BarChart />
                </div>
            </div>
        </div>
    );
}


export default FinancesCharts;