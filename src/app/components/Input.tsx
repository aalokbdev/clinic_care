const Input = ({lable}:{lable:string}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-bold text-[#112950]">{lable}</label>
           <input placeholder="Wpisz numer zgłoszenia" className="py-2 outline-none border-b-2" />
        </div>
    )
}

export default Input;