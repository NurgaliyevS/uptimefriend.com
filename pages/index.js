import Ads from "@/components/Ads";
import DownTime from "@/components/DownTime";
import FAQ from "@/components/FAQ";
import FeaturedOn from "@/components/FeaturedOn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Pricing from "@/components/Pricing";
import TeamMembers from "@/components/TeamMembers";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <header className={lato.className}>
        <Header />
      </header>
      <main className={`flex flex-col min-h-screen mx-auto ${lato.className}`}>
        <Main />
        <FeaturedOn />
        <Ads />
        <TeamMembers />
        <DownTime />
        <Pricing />
        <FAQ />
      </main>
      <footer className={lato.className}>
        <Footer />
      </footer>
    </>
  );
}
