import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
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
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Juanito Perez" onChange={(e)=> setUName(e.currentTarget.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rol</Form.Label>
                    <ButtonGroup >
                        {['Admin', 'User'].map((type)=>(
                            <ToggleButton 
                            id="rol" 
                            type="radio" 
                            value={type} 
                            name="rol" 
                            checked={uRol === type}
                            onChange={(e)=> setURol(e.currentTarget.value)}
                            >
                                {type} 
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Especialidad</Form.Label>
                    <Form.Select onChange={(e)=> setUSpecial(e.currentTarget.value)}>
                        {['Seguridad', 'Ingeniero', 'Desarrollador'].map((type)=>(
                            <option value={type}>{type}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button type="button" onClick={() => updateAll()}>Guardar</Button>
            </Form>
        </div>
    )
}

export default BasicData;