import { FC } from "react";

interface DarkLayoutProps {
  children: React.ReactNode;
}
export const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
