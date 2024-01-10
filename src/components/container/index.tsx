import { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
    return (
        <main className="flex justify-center items-center h-screen bg-primary py-20 px-40">
            {children}
        </main>
    )
}
