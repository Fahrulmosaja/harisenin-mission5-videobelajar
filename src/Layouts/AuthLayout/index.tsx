import type { LayoutProps } from "../types";

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return <header>{children}</header>;
};

export default AuthLayout;