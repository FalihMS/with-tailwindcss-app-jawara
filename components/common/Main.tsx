
import Head from "next/head"
import { ReactChild } from "react"


type MainProps = {
    title: string
    children?: ReactChild | ReactChild[]
}

export const Main = ({title, children}: MainProps) => {
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

