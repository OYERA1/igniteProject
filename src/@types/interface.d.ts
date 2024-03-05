import { ComponentPropsWithRef } from "react";
import { FieldValue, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

export interface ITask extends ComponentPropsWithRef<"input"> {
  register: UseFormRegister<FieldValues>
}

export interface IMinutes extends ITask {
  setValue: UseFormSetValue
  getValues: UseFormGetValues
}

export interface IButton extends ComponentPropsWithRef<"button"> {
}