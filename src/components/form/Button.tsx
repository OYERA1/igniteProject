import { Play } from '@phosphor-icons/react'

export default function FormButton() {
    return (
        <button
            className="
            flex w-full bg-content-green items-center justify-center 
            gap-5 p-5 mt-10 rounded-xl 
            hover:bg-content-hover-green
            disabled:bg-content-hover-green disabled:cursor-not-allowed"
        >
            <Play size={34} />
            <p>Começar</p>
        </button>
    )
}
