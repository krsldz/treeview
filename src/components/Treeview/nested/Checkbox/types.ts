import { ChangeEvent } from "react";
import { CustomClassNames } from "../../types";

export type CheckboxProps = {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  classNames: Partial<CustomClassNames>;
};
