import { Button, Form } from "react-bootstrap";
import useInfoStore from "../store/InfoStore";
import { useState } from "react";

function BasicData() {
    const updateName = useInfoStore((state)=> state.updateName)
    const updateRol = useInfoStore((state)=> state.updateRol)
    const updateSpecialism = useInfoStore((state)=> state.updateSpecialism)
    const [uName, setUName] = useState("")
    const [uRol, setURol] = useState("")
    const [uSpecial, setUSpecial] = useState("")

    function updateAll() {
        updateName(uName)
        updateRol(uRol)
        updateSpecialism(uSpecial)
    }

    return(
        <Form className="bg-dark bg-gradient d-flex flex-column w-75 h-75  align-self-center p-3 rounded-4 shadow-lg text-light">
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Juanito Perez" onChange={(e)=> setUName(e.currentTarget.value)}/>
            </Form.Group>
            <Form.Group className="d-flex flex-row my-3">
                <Form.Label>Rol:</Form.Label>
                    {['Admin', 'User'].map((type)=>(
                        <Form.Check 
                        id="default-radio" 
                        className="mx-3 text-white-50"
                        type="radio" 
                        label={type}
                        value={type} 
                        checked={uRol === type}
                        onChange={(e)=> setURol(e.currentTarget.value)}
                        />
                    ))}
            </Form.Group>
            <Form.Group>
                <Form.Label>Especialidad</Form.Label>
                <Form.Select onChange={(e)=> setUSpecial(e.currentTarget.value)}>
                    {['Seguridad', 'Ingeniero', 'Desarrollador'].map((type)=>(
                        <option value={type}>{type}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-end mt-3">
            <Button type="button" onClick={() => updateAll()}>Guardar</Button>
            </div>
        </Form>
    )
}

export default BasicData;