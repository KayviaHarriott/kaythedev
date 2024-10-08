import React from "react";
interface CheckMarkProps {
  color: string;
}

export const CheckMark: React.FC<CheckMarkProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
    </svg>
  );
};
