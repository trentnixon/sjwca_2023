// Components
import { FooterLinks } from "@/components/layout/Footer";
import { HeroContentLeft } from "@/components/layout/Hero";
import { HeaderMiddle } from "@/components/layout/PageHeader";
import { Container } from "@mantine/core";
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
      <HeroContentLeft />
      <Container size={'xl'}>
      <main>{children}</main>
      </Container>
      <FooterLinks />
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
