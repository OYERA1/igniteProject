import { Controller, UseFormRegister } from 'react-hook-form'
import { ContentType } from '../../../context/useCycle'
import { ChangeEvent, useEffect, useState } from 'react'

type FormHeaderProps = {
    register: UseFormRegister<ContentType>
    isEnable: (newState: boolean) => void
}

export default function FormHeader() {
    return (
        <div className="flex items-center gap-2 text-lg ">
            <p>Vou trabalhar em</p>

            <input
                placeholder="Dê um nome para o seu projeto"
                className="flex flex-wrap w-[270px] input placeholder:text-center"
                autoComplete="off"
                type="text"
            />

            <p>durante</p>

            <input
                min={1}
                max={60}
                type="number"
                placeholder="00"
                className="input "
            />

            <p>minutos.</p>
        </div>
    )
}
