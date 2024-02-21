import { Play } from "@phosphor-icons/react/dist/ssr";

export interface IButtonVariant {
  variant?: "primary" | "secondary" | "danger" | "sucess";
}

export default function Button({ variant }: IButtonVariant) {
  const buttonVariants = {
    primary: "bg-product-green",
    danger: "bg-feedback-red",
    secondary: "bg-orange-500",
    sucess: "bg-green-500",
  };
  return (
    <button
      type="submit"
      disabled
      className={`
            hover:bg-content-hover-green
            mt-10 flex w-full items-center justify-center gap-5
            rounded-xl bg-product-green p-5 text-base-title disabled:cursor-not-allowed disabled:bg-product-green-dark
           
            ${variant && buttonVariants[variant]}`}
    >
      <Play size={34} />
      <p>Começar</p>
    </button>
  );
}
