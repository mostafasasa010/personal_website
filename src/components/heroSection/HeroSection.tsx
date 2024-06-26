"use client";

import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/components/heroSection/heroSection.css";

const HeroSection = () => {
  const t = useTranslations("HeroSection");
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  return (
    <section className="h-[calc(100vh-64px)] py-10 md:py-12 lg:py-16 xl:py-24 relative overflow-hidden">
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4 lg:py-12 ">
          <div className="flex flex-col gap-3 py-2 md:py-20">
            <h1 className="text-2xl md:text-4xl font-bold">{t("name")}</h1>
            <p className="text-xl md:text-2xl font-bold">- {t("jobName")}</p>
          </div>
          <div>
            <div
              className={`w-[250px] h-[250px] md:w-[350px] md:h-[350px] ${
                resolvedTheme === "light" ? "bg-black" : "bg-zinc-950"
              } rounded-full flex justify-center items-center mx-auto overflow-hidden relative box-shadow duration-300 group`}
            >
              <Image
                src={"/person/person_rm_bg.png"}
                alt="Person image"
                width={320}
                height={320}
                className="absolute bottom-0 left-[50%] translate-x-[-50%] group-hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
        <div
          className={`absolute bottom-0 mb-[-60px] md:mb-0 z-10 ${
            locale === "en" ? "left-4" : "right-4"
          } scroll-animation`}
        >
          <Link
            href={"#"}
            className="writing-mode flex justify-center items-center"
          >
            {locale === "en" ? (
              <>
                <span className="font-semibold">{t("scroll")}</span>
                <ChevronDown size={20} className="ml-[-2px]" />
              </>
            ) : (
              <>
                <ChevronDown size={20} className="ml-[-2px]" />
                <span className="font-semibold">{t("scroll")}</span>
              </>
            )}
          </Link>
        </div>
      </div>
      <div className="absolute animation one w-[180%]"></div>
      <div className="absolute animation two w-[180%]"></div>
      <div className="absolute animation three w-[180%]"></div>
      <div className="absolute animation four w-[180%]"></div>
    </section>
  );
};

export default HeroSection;
