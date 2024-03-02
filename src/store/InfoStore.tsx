import { create } from "zustand";

type State = {
    name: string
    rol: string
    specialism: string
}

type Action = {
    updateName: (name: State['name']) => void
    updateRol: (rol: State['rol']) => void
    updateSpecialism: (specialism: State['specialism']) => void
}

const useInfoStore = create<State & Action> ((set) => ({
    name: '',
    rol: '',
    specialism: '',
    updateName: (name) => set(() => ({ name: name })),
    updateRol: (rol) => set(() => ({ rol: rol })),
    updateSpecialism: (specialism) => set(() => ({ specialism: specialism })),
}))

export default useInfoStore;