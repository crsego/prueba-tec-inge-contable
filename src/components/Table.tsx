import BasicData from "./BasicData";
import useInfoStore from "../store/InfoStore";


function Table() {
    const name = useInfoStore((state) => state.name)
    const rol = useInfoStore((state) => state.rol)
    const specialism = useInfoStore((state) => state.specialism)
    return(
        <div className="d-flex w-100 h-100 justify-content-center p-5 ">
            <div className="d-flex flex-column w-75 h-100 rounded-4  justify-content-center p-3 bg-secondary bg-gradient">
                <div className="d-flex h-25 text-white fs-5">
                {[name,rol,specialism].map((type)=>(
                    <p className="h-25 mx-1 ">{type}</p>
                ))}
                </div>
                <BasicData/>
            </div>
        </div>
    )
}

export default Table;