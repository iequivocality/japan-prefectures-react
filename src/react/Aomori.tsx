import React, { SVGAttributes, forwardRef } from "react";

const Aomori = forwardRef<SVGElement, { width: string | number | undefined }>(
  ({ width }, ref) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 400 280" width={width}>
        <path d="M0 0h400v280H0z" fill="#fff" />
        <path
          d="M196 43c13.548 11.821 30.872 25.532 52 26 20.875.468 28-7.008 42-13 0 0-14.798 38.127-16 51-1.204 12.901-.77 12.161 0 23 .769 10.819 12.101 69.279 52 95H66c33.795-30.12 54.448-67.905 54-118h40c2.736 23.732 1.374 57.811 16 66 14.079 7.882 20.422-13.529 20-21h18c-.959 10.671 6.03 21.337 16 21 10.99-.372 17.975-26.593 18-43 .025-16.05-3.364-20.542-12-23s-29.266 12.362-40 23V43z"
          fill="#04773d"
          stroke="#04773d"
        />
      </svg>
    );
  },
);

Aomori.displayName = "Aomori";

export default Aomori;