import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactChild, useState } from 'react'
import { SlotTable } from '../../components/datetimeTable/SlotTable'

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



export default Home