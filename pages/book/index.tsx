import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactChild, useState } from 'react'
import { Cell } from '../../components/datetimeTable/Cell'
import { SlotCell } from '../../components/datetimeTable/SlotCell'
import { MainTable, Row, HeaderTable, Table } from '../../components/datetimeTable/Table'


const getVenueList = (): any[] => {
    return [
        'Old Trafford',
        'Stamford Bridge',
        'San Siro',
        'Old Trafford',
        'Old Trafford',        
    ]
}  
// Helper, Need to delete later
const getDateList = (): any[] => {
    const dateOpen = 9
    const dateClose = 24

    const dateList = []
    for (let index = dateOpen; index <= dateClose; index++) {
        dateList.push({
            time: index,
            data: null
        })        
    }

    return dateList
}

// Helper, Need to delete later
const getBookingList = (): any[][] =>{
    return [
        [
            {
                time: 10,
                name: "arkhan"
            },
            {
                time: 11,
                name: "budi"
            }
        ],
        [],
        [
            {
                time: 11,
                name: "budi"
            }
        ],
        [],
        []
    ]
}

const getVenueSlot = (): any[][] => {
    const dateOpen = 9
    const dateClose = 24
    const venueBookingList = getBookingList()

    const venueSlot = []
    for (let index = 0; index < getVenueList().length; index++) {
        const dateList = []
        const bookingList = venueBookingList[index]
        
        for (let index_j = dateOpen; index_j <= dateClose; index_j++) {
            const slot = {
                time: index_j,
                data: null
            }

            if(bookingList[0] !== undefined){
            
                const booking = bookingList[0]

                if(index_j == booking.time){
                    slot.data = booking.name
                    bookingList.shift()    
                }
            }
            dateList.push(slot)        
        }
        venueSlot.push(dateList)        
    }

    return venueSlot
}


const Home: NextPage = () => {
    return (
        <Main title={'Booking Lapangan'}>
            <Utils />
            <SlotTable />
        </Main>
    )
}

type MainProps = {
    title: string
    children?: ReactChild | ReactChild[]
}

const Main = ({title, children}: MainProps) => {
    return(
        <div className="flex h-screen flex-col items-center py-2 w-full">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="grow flex flex-col w-full h-full items-center">
                {children}
            </main>
        </div>
    )
}

const Utils = () =>{
    return(
        <div className="my-4">
            <h1 className="text-md bg-gray-200 py-3 px-6 border rounded">Kamis, 21 Juli 2022</h1>
        </div>
    )
}
// Table Displaying Slot Available
const SlotTable = () => {
    const [selectedSlot, setSelectedSlot] = useState('')
    return (
        <Table>
            <HeaderTable
                data={getVenueList()}
            />
            <MainTable>

                <Row isHeader>
                    {
                        getDateList().map((date, index) =>
                            <Cell className="w-48 h-20 pt-8 bg-gray-200 text-center" key={index}>
                                {`${date.time}:00`}
                            </Cell>
                        )
                    }
                </Row>

                <>
                    {
                        getVenueSlot().map((rows, i) =>
                            <Row key={i}>
                                {
                                    rows.map((slot, index) => {
                                        return (
                                            <SlotCell
                                                id={`${i + 2}-${index}`}
                                                clickedIndex={selectedSlot}
                                                onClick={() => setSelectedSlot(`${i + 2}-${index}`)}
                                                data={slot.data}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        )
                    }
                </>

            </MainTable>

        </Table>
    )
}


export default Home