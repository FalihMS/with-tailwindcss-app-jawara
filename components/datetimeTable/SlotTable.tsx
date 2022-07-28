import { useEffect, useState } from "react"
import { Cell } from "./Cell"
import { SlotCell } from "./SlotCell"
import { Table, MainTable, Row } from "./Table"

const mapVenueList = (data: any[]) => {
    return data.map((field) => { return { id: field.id, name: field.name } })
}

const mapBookingList = (data: any[]) => {
    return data.map((field) => { return field.booking_view })
}

const mapVenueSlot = (bookingList: any[][]): any[][] => {
    const dateOpen = 9
    const dateClose = 24

    const venueBookingList = bookingList
    const venueSlot = []

    for (let index = 0; index < bookingList.length; index++) {
        const dateList = []
        const bookingList = venueBookingList[index]

        for (let index_j = dateOpen; index_j <= dateClose; index_j++) {
            const slot = {
                time: index_j,
                data: null
            }

            if (bookingList[0] !== undefined) {

                const booking = bookingList[0]

                if (index_j == booking.time) {
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


// Table Displaying Slot Available
export const SlotTable = () => {

    const [data, setData] = useState({
        venue: [{
            id: null,
            name: null
        }],
        slot: [[{
            data: null,
            time: null,
        }]],
    })
    const [isLoading, setLoading] = useState(false)
    const [selectedSlot, setSelectedSlot] = useState('')

    useEffect(() => {
        setLoading(true)
        fetch('/api/book')
            .then((res) => res.json())
            .then((data) => {
                setData({
                    venue: mapVenueList(data),
                    slot: mapVenueSlot(mapBookingList(data))
                })
                setLoading(false)

            })
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <Table>
            <HeaderTable
                data={data.venue}
            />
            <MainTable>

                <Row isHeader>
                    {
                        data.slot[0].map((date, index) =>
                            <Cell className="w-48 h-20 pt-8 bg-gray-200 text-center" key={index}>
                                {`${date.time}:00`}
                            </Cell>
                        )
                    }
                </Row>

                <>
                    {
                        data.slot.map((rows, i) =>
                            <Row key={i}>
                                {
                                    rows.map((slot) => {
                                        return (
                                            <SlotCell
                                                id={`${data.venue[i].id}_${slot.time}_2022-05-20`}
                                                clickedIndex={selectedSlot}
                                                onClick={() => setSelectedSlot(`${data.venue[i].id}_${slot.time}_2022-05-20`)}
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

type RowHeader = {
    data: any[]
}
const HeaderTable = ({ data }: RowHeader) => {
    return (
        <div className="mb-4 border-r flex flex-col ">
            <p className="bg-gray-200 h-20 w-48 text-center border-b" />
            {
                data.map((venue, index) => <p key={index} className="relative grow w-48 text-center border-b"><span className="absolute top-10 left-10">{venue.name}</span></p>)
            }
        </div>
    )
} 