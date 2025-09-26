import { FooterView } from "./footer";
import { HeaderView } from "./header";
import { MainView } from "./main";

export default function Home() {
  return (
    <>
      <HeaderView />;
      <MainView />
      <FooterView />;
    </>
  );
}
