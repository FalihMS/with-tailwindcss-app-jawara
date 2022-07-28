import type { NextPage } from 'next'
import { Main } from '../../components/common/Main'
import { SlotTable } from '../../components/datetimeTable/SlotTable'

const Home: NextPage = () => {
    return (
        <Main title={'Booking Lapangan'}>
            <Utils />
            <SlotTable />
        </Main>
    )
}

const Utils = () =>{
    return(
        <div className="my-4">
            <h1 className="text-md bg-gray-200 py-3 px-6 border rounded">Kamis, 21 Juli 2022</h1>
        </div>
    )
}



export default Home