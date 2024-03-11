"use client";

import Skip from "@/components/skip";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Skill from "@/components/skill";
import Site from "@/components/site";
import Port from "@/components/port";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import smooth from "@/utils/smooth";
import link from "@/utils/link";
import {useEffect} from "react";


export default function Home() {
  useEffect(() => {
    smooth();
    link();
  }, []);

  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <Intro text="안녕하세요 프론트엔드 개발자 배정식입니다." />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
