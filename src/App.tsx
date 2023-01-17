import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header";
import { Orders } from "./components/Orders";
import { FormModal } from "./components/FormModal";
export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <FormModal />
    </>
  );
}
