import Header from "../components/Header.tsx";

import { ChakraProvider } from 'https://esm.sh/@chakra-ui/react@2.3.5'
import Navbar from "../components/Navbar.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Layout from "../components/Layout.tsx";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          {children}
        </Layout>
      </ChakraProvider>
    </>
  );
}
