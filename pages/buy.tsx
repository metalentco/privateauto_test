import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Filter from "@/components/buy/Filter";
import useApi from "@/hooks/useApi";

export default function Buy() {
  const { getInitialData } = useApi();

  useEffect(() => {
    getLoading();
  }, []);

  const getLoading = async () => {
    // let data = await getInitialData();
    // console.log("data:", data);
  };

  return (
    <div className="w-full">
      <Header />
      <Menu />
      <Filter />
      <div className="h-[300px]"></div>
      <Footer />
    </div>
  );
}
