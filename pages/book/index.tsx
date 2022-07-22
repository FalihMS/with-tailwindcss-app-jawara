import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'


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
const getBookingList = (): any[] =>{
    return [
        {
            time: 10,
            name: "arkhan"
        },
        {
            time: 11,
            name: "budi"
        }
    ]
}

// Helper, Need to delete later
const getMappedSlot = (): any[] =>{
    const dateList = getDateList()
    const bookingList = getBookingList()

    dateList.map((slot, index)=> {
        const booking = bookingList[0]
        if(booking !== undefined && (slot.time == booking.time)){
            slot.data = booking.name
            bookingList.shift()
        }
    })

    return dateList
}

const Home: NextPage = () => {
    return (
        <div className="flex h-screen flex-col items-center py-2 w-full">
            <Head>
                <title>Booking Lapangan</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="grow flex flex-col w-full h-full items-center">
                {/* Utility Datetime */}
                <div className="my-4">
                    <h1 className="text-md bg-gray-200 py-3 px-6 border rounded">Kamis, 21 Juli 2022</h1>
                </div>
                <Datetime />
            </main>
        </div>
    )
}

const Datetime = () =>{
    

    return (
        <div className="flex w-full h-full">
            <div className="mb-4 border-r flex flex-col ">

            {/* Header Datetime */}
                <div className="bg-gray-200 h-20 w-48 text-center border-b" />
                <p className="grow w-48 text-center border-b">Old Trafford</p>
                <p className="grow w-48 text-center border-b">Old Trafford</p>
                <p className="grow w-48 text-center border-b">Old Trafford</p>
                <p className="grow w-48 text-center border-b">Old Trafford</p>
                <p className="grow w-48 text-center border-b">Old Trafford</p>
                <p className="grow w-48 text-center border-b">Old Trafford</p>
                <p className="grow w-48 text-center border-b">Old Trafford</p>
            </div>

            <MainDatetime />
            
        </div>                    
    )
}

const MainDatetime = () =>{
    const [selectedSlot, setSelectedSlot] = useState('')
    const bookingList = getBookingList()
    return (
        <div className="flex flex-col overflow-x-auto h-full">

            {/* Header Datetime */}
            <div className="flex w-max">
                {
                    getDateList().map((date, index) => <p className="w-48 h-20 pt-8 bg-gray-200 text-center" key={index}>{`${date.time}:00`}</p>)
                }
            </div>
            {/* Row Datetime */}
            <div className="flex w-max grow">
                {
                    getMappedSlot().map((slot, index) => {
                        if (slot.data != null) {
                            return (
                                <div
                                    onClick={(e) => setSelectedSlot(`1-${index}`)}
                                    className={selectedSlot == `1-${index}` ? "relative border border-red-400 bg-red-300 w-48 text-center" : "relative border-b border-r bg-red-300 border-gray-200 w-48 text-center"}
                                    key={`1-${index}`}>
                                    <span className="absolute top-0 left-0 h-full w-full capitalize text-lg font-weight-medium text-red-700 my-auto"> {slot.data}</span>
                                </div>
                            )
                        }
                        return (
                            <div
                                onClick={(e) => setSelectedSlot(`1-${index}`)}
                                className={selectedSlot == `1-${index}` ? "border border-green-400 w-48 text-center" : "border-b border-r border-gray-200 w-48 text-center"}
                                key={`1-${index}`}>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex w-max grow">
                {
                    getDateList().map((date, index) =>
                        <div
                            onClick={(e) => setSelectedSlot(`2-${index}`)}
                            className={selectedSlot == `2-${index}` ? "border border-green-400 w-48 text-center" : "border-b border-r border-gray-200 w-48 text-center"}
                            key={`2-${index}`}>
                        </div>
                    )
                }
            </div>
            <div className="flex w-max grow">
                {
                    getDateList().map((date, index) =>
                        <div
                            onClick={(e) => setSelectedSlot(`3-${index}`)}
                            className={selectedSlot == `3-${index}` ? "border border-green-400 w-48 text-center" : "border-b border-r border-gray-200 w-48 text-center"}
                            key={`3-${index}`}>
                        </div>
                    )
                }
            </div>
            <div className="flex w-max grow">
                {
                    getDateList().map((date, index) =>
                        <div
                            onClick={(e) => setSelectedSlot(`4-${index}`)}
                            className={selectedSlot == `4-${index}` ? "border border-green-400 w-48 text-center" : "border-b border-r border-gray-200 w-48 text-center"}
                            key={`4-${index}`}>
                        </div>
                    )
                }
            </div>
            <div className="flex w-max grow">
                {
                    getDateList().map((date, index) =>
                        <div
                            onClick={(e) => setSelectedSlot(`5-${index}`)}
                            className={selectedSlot == `5-${index}` ? "border border-green-400 w-48 text-center" : "border-b border-r border-gray-200 w-48 text-center"}
                            key={`5-${index}`}>
                        </div>
                    )
                }
            </div>
            <div className="flex w-max grow">
                {
                    getDateList().map((date, index) =>
                        <div
                            onClick={(e) => setSelectedSlot(`6-${index}`)}
                            className={selectedSlot == `6-${index}` ? "border border-green-400 w-48 text-center" : "border-b border-r border-gray-200 w-48 text-center"}
                            key={`6-${index}`}>
                        </div>
                    )
                }
            </div>
            <div className="flex w-max grow">
                {
                    getDateList().map((date, index) =>
                        <div
                            onClick={(e) => setSelectedSlot(`7-${index}`)}
                            className={selectedSlot == `7-${index}` ? "border border-green-400 w-48 text-center" : "border-b border-r border-gray-200 w-48 text-center"}
                            key={`7-${index}`}>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Home