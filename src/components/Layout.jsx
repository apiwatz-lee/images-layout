import { LoadingProvider } from "../context/LoadingContext";
import Loading from "./Loading";

const Layout = ({ children }) => {
  return (
    <LoadingProvider>
      <Loading />
      <main>{children}</main>
    </LoadingProvider>
  );
};

export default Layout;
