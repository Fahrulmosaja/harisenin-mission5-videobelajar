import type { LayoutProps } from "../types";

const FooterLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <footer className="mt-8 bg-white w-screen">
      {children}
    </footer>);
};

export default FooterLayout;