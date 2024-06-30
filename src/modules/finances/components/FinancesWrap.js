import FinancesCharts from "./FinancesCharts"
import Menu from "../../home/components/Menu"

function FinancesWrap() {
    return (
        <>
            <div className='fixed'>
                <Menu  />
            </div>
            <div className='h-screen ml-24'>
                <FinancesCharts />
            </div>
        </>
    )
}

export default FinancesWrap;