import { Header } from "@/components/common/header/Header";
import Main from "./main/Page";
import TomSpa from "./tomspa/page";
import Venom from "./venom/components/venom";

export default function Home() {
  return (
    <>
      <Header />

      <Main />

      <TomSpa />

      <Venom />
    </>
  );
}
