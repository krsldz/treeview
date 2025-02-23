import { ChangeEvent } from "react";

export type CheckboxProps = {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
};
