import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactChild, useEffect, useState } from "react"
import { Main } from "../../components/common/Main"

const AddNewBooking: NextPage = () => {
    return(
        <Main title={"Booking Slot"}>
            <NewBookingForm />
        </Main>
    )
}

const NewBookingForm = () => {
    const router = useRouter()

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        fetch('/api/book/'+ router.query.field)
            .then((res) => res.json())
            .then((data) => {
                setData(data[0].name)
                setLoading(false)
            })
    }, [])
    
    if(isLoading) return(<p>Loading....</p>)

    return(
        <Form title="Form Booking Lapangan">
            <HeaderRow>Informasi Booking</HeaderRow>
            
            <div className="hidden">
                <Input label={"field id"} name={"field_id"} span={3} defaultValue={router.query.field + ""} readOnly />
            </div>
            
            <Input label={"Tanggal"} name={"tanggal"} span={3} defaultValue={router.query.date + ""} readOnly />
            <Input label={"Lapangan"} name={"lapangan"} span={3} defaultValue={data + ""} readOnly />
            <Input label={"Waktu"} name={"waktu"} span={2} defaultValue={`${router.query.time}:00`} readOnly />
            <Input type="number" label={"Durasi"} name={"durasi"} span={2} />
            <Input label={"Harga"} name={"harga"} span={2} />

            <HeaderRow>Informasi Pelanggan</HeaderRow>
            
            <Input label={"No. Handphone"} name={"handphone"} span={3} />
            <Input label={"Nama Lengkap"} name={"nama"} span={3} />
            
            <ButtonGroupRow>
                <Link href={"/book"}><a className="py-2 px-4 border text-red-600 border-red-400 bg-red-200 rounded">Kembali</a></Link>
                <button className="py-2 px-4 border text-green-600 border-green-400 bg-green-200 rounded">Booking Lapangan</button>
            </ButtonGroupRow>
            
        </Form>
    )
}

type ButtonGroupRowProps = {
    children: ReactChild | ReactChild[]
}

const ButtonGroupRow = ({children}: ButtonGroupRowProps) => {
    return(
        <div className="col-span-6 mt-8 flex justify-center space-x-4">
            {children}
        </div>
    )
}

type HeaderRowProps = {
    children: ReactChild | ReactChild[]
}

const HeaderRow = ({children}: HeaderRowProps) => {
    return(
        <div className="col-span-6 mt-8">
            <p>{children}</p>
        </div>
    )
}

type FormProps = {
    children: ReactChild | ReactChild[]
    title: string
}

const Form = ({ children, title }: FormProps) =>{
    return(
        <div className="bg-gray-200 lg:w-1/2 my-auto h-fit flex flex-col items-center">
            <p className="text-xl mt-4">{title}</p>
            
            <form action="/api/book/new" method="POST" className="w-full grid grid-cols-6 gap-3 mb-8 px-8">
                {children}
            </form>
        </div>
    )
}

type InputProps = {
    label: string
    name: string
    type?: string
    span?: number
    defaultValue?: string
    readOnly?: boolean
}

const Input = ({label, name, type, span, defaultValue, readOnly}: InputProps) => {
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
export default AddNewBooking