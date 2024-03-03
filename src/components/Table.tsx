import BasicData from "./BasicData";
import useInfoStore from "../store/InfoStore";


function Table() {
    const name = useInfoStore((state) => state.name)
    const rol = useInfoStore((state) => state.rol)
    const specialism = useInfoStore((state) => state.specialism)
    return(
        <div className="d-flex w-100 h-100 justify-content-center p-5">
            <div className="d-flex flex-column w-75 h-100 border rounded-4 border-4 justify-content-center p-3">
                <div className="d-flex h-20px">
                {[name,rol,specialism].map((type)=>(
                    <p className="h-20px mx-1">{type}</p>
                ))}
                </div>
                <BasicData/>
            </div>
        </div>
    )
}

export default Table;