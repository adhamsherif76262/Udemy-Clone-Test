import styles from "./page.module.css";
import Footer from "./Components/Footer";
import HeaderNavBar from "./Components/HeaderNavBar";
import SalesSection from "./Components/SalesSection";
import LogosSection from "./Components/LogosSection";
import TopCategoriesSection from "./Components/TopCategoriesSection";
import Courses from "./Courses/page";

export default function Home() {
  return (
    <main className="">
      <HeaderNavBar></HeaderNavBar>
      <SalesSection></SalesSection>
      <LogosSection></LogosSection>
      <Courses></Courses>
      <TopCategoriesSection></TopCategoriesSection>
      <Footer></Footer>
    </main>
  );
}
