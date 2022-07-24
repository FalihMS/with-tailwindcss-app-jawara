import { ReactChild } from "react"

type CellProps = {
    id?: string,
    className: string,
    onClick?: CallableFunction
    children?: ReactChild | ReactChild[]
} 

export const Cell = ({ id, onClick, className, children }: CellProps) => {
    return(
        <div
            onClick={(e) => onClick && onClick()}
            className={className}
            key={id}>
            {children != undefined && children}
        </div>

    )
}