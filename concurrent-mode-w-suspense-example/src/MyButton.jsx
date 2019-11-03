import React, { useTransition } from "react";

export const MyButton = ({ children, onClick, ...props }) => {
  const [startTransition, isPending] = useTransition({
    timeoutMs: 4000
  });

  return (
    <>
      <button
        onClick={() => {
          startTransition(() => {
            onClick();
          });
        }}
        disabled={isPending}
        {...props}
      >
        {children}
      </button>
      {isPending ? <p>Loading...</p> : null}
    </>
  );
};
