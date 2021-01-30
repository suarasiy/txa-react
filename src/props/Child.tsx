import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      <p>{color}</p>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
};

export const ChildFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      <p>{color}</p>
      {children}
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}