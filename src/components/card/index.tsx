'use client'

import { ReactNode } from 'react'
import { Clock, Scroll } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Card({
    children,
    color
}: {
    children: ReactNode
    color: string
}) {
    const size = 24

    return (
        <div
            className="
        flex flex-col
        w-[70rem]
        h-[44rem]
        rounded-xl p-10
        bg-secondary text-text-primary"
        >
            <header className="flex justify-between">
                <p className="text-content-green">icon</p>
                <div className="flex gap-2 text-white [&>*]:cursor-pointer ">
                    <Link href={'/'}>
                        <Clock
                            size={size}
                            className={
                                color === 'home'
                                    ? 'text-content-green'
                                    : undefined
                            }
                        />
                    </Link>
                    <Link href={'/history'}>
                        <Scroll
                            size={size}
                            className={
                                color === 'history'
                                    ? 'text-content-green'
                                    : undefined
                            }
                        />
                    </Link>
                </div>
            </header>
            {children}
        </div>
    )
}
