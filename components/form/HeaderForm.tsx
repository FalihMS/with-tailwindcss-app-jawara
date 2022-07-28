import { ReactChild } from "react"

type HeaderFormProps = {
    children: ReactChild | ReactChild[]
}

export const HeaderForm = ({children}: HeaderFormProps) => {
    return(
        <div className="col-span-6 mt-8">
            <p>{children}</p>
        </div>
    )
}

