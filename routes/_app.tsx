// import 'https://esm.sh/@fontsource/raleway@4.5.11/400.css';

import { ChakraProvider } from 'https://esm.sh/@chakra-ui/react@2.3.5'
import Layout from "../components/Layout.tsx";
import theme from '../themes/theme.tsx';
import Fonts from '../themes/fonts.tsx';


export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider theme={theme}>
          <Fonts />
          <Layout>
            {children}
          </Layout>
      </ChakraProvider>
    </>
  );
}
