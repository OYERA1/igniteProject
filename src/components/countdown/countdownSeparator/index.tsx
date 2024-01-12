import { ReactNode } from 'react'

export default function Separator({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center justify-center bg-text-background py-10 px-4 rounded-lg ">
            <p className="font-bold font-mono text-[10rem] leading-[11.375rem]">{children}</p>
        </div>
    )
}
