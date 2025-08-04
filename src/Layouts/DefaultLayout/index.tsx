import type { LayoutProps } from "../types";

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <header>
      {children}
    </header>);
};

export default DefaultLayout;