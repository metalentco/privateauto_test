import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Filter from "@/components/buy/Filter";

export default function Buy() {
  return (
    <div className="w-full">
      <Header />
      <Menu />
      <Filter />
      <Footer />
    </div>
  );
}
