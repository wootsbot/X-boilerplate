import * as React from "react";

import { cls } from "#/lib/utils/cls";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  isError?: boolean;
  errMsg?: string;
}

export const InputField = React.forwardRef<HTMLInputElement, InputProps>(function InputField(props, ref) {
  const { className, isError, errMsg, ...others } = props;

  return (
    <div className={cls("flex flex-col gap-1 w-full", className)}>
      <input
        ref={ref}
        className="px-4 py-3 rounded-md outline-1  outline-stone-400 bg-[#f2f0ed] active:outline-2 focus:outline-2 placeholder:italic placeholder:text-stone-400 text-stone-950"
        {...others}
      />
      {isError && <p className="text-sm font-thin text-red-500">{errMsg}</p>}
    </div>
  );
});
