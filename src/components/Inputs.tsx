import { IInputs } from "@/src/@types/interface";

function TaskInput({ placeholder, ...rest }: IInputs) {
  return (
    <input
      type="text"
      placeholder={"Dê um nome para o seu projeto"}
      className="flex h-10 w-max flex-wrap border-b-2 border-solid
       border-b-base-label bg-transparent
      px-2 duration-100
      ease-linear placeholder:text-center
      focus:border-b-product-green focus:shadow-none focus:outline-0
      "
    />
  );
}

function MinutesInput({ placeholder, ...rest }: IInputs) {
  return (
    <div>
      <input type="number" placeholder={placeholder} />
    </div>
  );
}

export { TaskInput, MinutesInput };
