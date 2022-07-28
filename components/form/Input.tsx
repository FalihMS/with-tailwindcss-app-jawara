type InputProps = {
    label: string
    name: string
    type?: string
    span?: number
    defaultValue?: string
    readOnly?: boolean
}

export const Input = ({label, name, type, span, defaultValue, readOnly}: InputProps) => {
    const className = span != undefined ? `flex flex-col mx-2 space-y-2 col-span-${span}` : "flex flex-col mx-2 space-y-2 col-span-3" 
    const classNameInput = !readOnly ? "rounded-md p-1 ring-0 focus:outline-green-400 border border-gray-400" : "rounded-md p-1 ring-0 focus:outline-green-400 border border-gray-400 bg-gray-100" 
    return(
        <div className={className}>
            <label>{label}</label>
            <input 
                type={type ? type : "text"}
                className={classNameInput} 
                name={name} 
                value={defaultValue}
                readOnly={readOnly}
            />
        </div>
    )
}
