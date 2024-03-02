import BasicData from "./BasicData";
import useInfoStore from "../store/InfoStore";
function Table() {
    const name = useInfoStore((state) => state.name)
    const rol = useInfoStore((state) => state.rol)
    const specialism = useInfoStore((state) => state.specialism)
    return(
        <div>
            {[name,rol,specialism].map((type)=>(
                <p>{type}</p>
            ))}
            <div>
                <BasicData/>
            </div>
        </div>
    )
}

export default Table;