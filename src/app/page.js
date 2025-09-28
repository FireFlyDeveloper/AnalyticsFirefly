import { FooterView } from "../../components/layout/dashboard/footer";
import { HeaderView } from "../../components/layout/dashboard/header";
import { MainView } from "../../components/layout/dashboard/main";

export default function Home() {
  return (
    <>
      <HeaderView />
      <MainView />
      <FooterView />
    </>
  );
}
