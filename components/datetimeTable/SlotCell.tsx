import Link from "next/link"
import { ReactChild } from "react"
import { Cell } from "./Cell"

type SlotCellProps = {
    data: string | null, 
    id: string, 
    onClick: CallableFunction, 
    clickedIndex: string
}
export const SlotCell = ({data, id, onClick, clickedIndex }: SlotCellProps) => {
    if (data != null) {
        return (
            <BookedClickableCell
                id={id}
                onClick={onClick} 
            >
                <p className="text-red-400 border-red-200 bg-red-100 border-2 rounded py-2 w-2/3 self-center capitalize">{data}</p>
            </BookedClickableCell>

        )
    }else{
        const query = id.split("_")
        return (
            <ClickableCell
                id={id}
                clickedIndex={ clickedIndex }
                onClick={ onClick }
            >
                <Link href={{ pathname:"/book/new", query:{field: query[0], time:query[1], date:query[2] } }}>
                    <p className="cursor-pointer text-green-600 border-green-400 bg-green-200 border rounded py-2 w-2/3 self-center ">+ Add New</p>
                </Link>
            </ClickableCell>
        )
    
    }
}

type ClickableCellProps = {
    id: string, 
    onClick: CallableFunction, 
    clickedIndex: string, 
    children?: ReactChild | ReactChild[]
}

const ClickableCell = ({ id, onClick, clickedIndex, children }: ClickableCellProps) => {
    return(
        <Cell
            id={id}
            className={"relative border-b border-r border-gray-200 w-48 text-center"}
            onClick={() => onClick() }
        >
            <div className={clickedIndex == id ? "absolute top-0 left-0 h-full w-full flex flex-col justify-center" : "absolute top-0 left-0 h-full w-full flex flex-col justify-center hidden"}> 
                {children}
            </div>
        </Cell>
    )
}

type BookedClickableCellProps = {
    id: string, 
    onClick: CallableFunction, 
    children?: ReactChild | ReactChild[]
}

const BookedClickableCell = ({ id, onClick, children }: BookedClickableCellProps) => {
    return(
        <Cell
            id={id}
            className={"relative border-b border-r border-gray-200 w-48 text-center"}
            onClick={() => onClick() }
        >
            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center"> 
                {children}
            </div>
        </Cell>
    )
}


