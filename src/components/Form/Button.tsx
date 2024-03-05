import { Play, HandPalm } from "@phosphor-icons/react/dist/ssr";
import { IButton } from "../../@types/interface";

export function PlayButton({ disabled, children, ...rest }: IButton) {
	return (
		<button
			type="submit"
			className={`
      hover:bg-product-green-dark flex h-max w-full
      items-center justify-center gap-2 rounded-lg
      p-5 font-bold text-base-title
      disabled:cursor-not-allowed disabled:bg-product-green-dark disabled:text-base-label
      bg-product-green`}
			disabled={disabled}
			{...rest}
		>
			<Play size={24} className="font-bold" />
			{children}
		</button>
	);
}

export function StopButton({ disabled, children, ...rest }: IButton) {
	return (
		<button
			type="button"
			className={`
      hover:bg-feedback-red-dark flex h-max w-full
      items-center justify-center gap-2 rounded-lg
      p-5 font-bold text-base-title
      disabled:cursor-not-allowed 
      bg-feedback-red`}
			disabled={disabled}
			{...rest}
		>
			<HandPalm size={24} className="font-bold" />
			{children}
		</button>
	);
}
