// Components
import { HeaderMiddle } from "@/components/layout/PageHeader";
import Meta from "./Meta";

//import { useRouter } from "next/router";
/* import { useFetchUser, UserProvider } from "../../lib/authContext";
import { AccountDetailsProvider } from "../../lib/userContext"; */
//import { HeaderMiddle } from '@/components/layout/PageHeader';
const Layout = ({ children }) => {
  //const { user, loading } = useFetchUser();



  return (
    <>
      <Meta />
      <HeaderMiddle />
      <div className="Container">
      <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
/*
<UserProvider value={{ user, loading }}>
      <AccountDetailsProvider>
         </AccountDetailsProvider>
    </UserProvider>
*/
