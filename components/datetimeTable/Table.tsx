import { ReactChild, useState } from "react"

type TableProps = {
    children: ReactChild | ReactChild[]
}

export const Table = ({children}: TableProps) =>{

    return (
        <div className="flex w-full h-full">
            {children}
            
        </div>                    
    )
}

type MainDatetime = {
    children:  ReactChild | ReactChild[]
} 
export const MainTable = ({ children }: MainDatetime ) =>{
    return (
        <div className="flex flex-col overflow-x-auto h-full">

            {children}

        </div>
    )
}

type RowProps = {
    children?: ReactChild | ReactChild[]
    isHeader?: boolean
}
export const Row = ({children, isHeader}: RowProps) => {
    return(
        <div className={isHeader ? "flex w-max" : "flex w-max grow"}>
            {children}
        </div>
    )
}