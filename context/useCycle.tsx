'use client'

import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'

export interface ContentType {
    project: string
    time: number
}

export interface CycleType extends ContentType {
    id: string
    projectStart: Date
    projectInterrupted?: Date
    projectEnd?: Date
}

interface CycleContextType {
    setConteudo: (newState: ContentType) => void
    cycles: CycleType[]
}

const CycleContext = createContext<CycleContextType | undefined>({
    setConteudo: () => {},
    cycles: []
})

export default function CycleProvider({ children }: { children: ReactNode }) {
    const [conteudo, setConteudo] = useState<ContentType | null>(null)
    const [cycle, setCycle] = useState<CycleType | null>(null)
    const [cycles, setCycles] = useState<CycleType[]>([])

    useEffect(() => {
        if (conteudo) {
            const { project, time } = conteudo
            setCycle({
                project,
                time,
                id: new Date().getTime().toString(),
                projectStart: new Date()
            })
        }
    }, [conteudo])

    useEffect(() => {
        if (cycle) {
            setCycles(prevCycles => [...prevCycles, cycle])
        }
    }, [cycle])

    useEffect(() => {
        console.log(cycles)
    }, [cycles])

    return (
        <CycleContext.Provider value={{ setConteudo, cycles }}>
            {children}
        </CycleContext.Provider>
    )
}

export function useCycle() {
    const context = useContext(CycleContext)
    if (!context) {
        throw new Error('useCycle must be used within a CycleProvider')
    }
    return context
}
