import { ApiResponseData } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import parse from "html-react-parser";
import TabComponent from "@/components/tabs/Tabs";
import AccordionComponent from "@/components/accordion/Accordion";
import useScreenSize, { ScreenType } from "@/hooks/use-screen-size";

type Exercise2Props = {
  sections: ApiResponseData[];
};

export default function Exercise2({ sections }: Exercise2Props) {
  const screenSize = useScreenSize();
  const tabList = sections.map((section) => ({
    ...section,
    content: parse(section.content),
    header: section.title,
  }));

  return (
    <main className={"flex min-h-screen flex-col items-center"}>
      {screenSize === ScreenType.MOBILE ? (
        <div className="w-full">
          <AccordionComponent accordionItems={tabList} />
        </div>
      ) : (
        <TabComponent tabList={tabList} />
      )}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let sections = "";
  const response = await fetch("http:localhost:3000/api/data");
  if (response.ok) {
    const { data } = await response.json();
    sections = data;
  }
  return {
    props: {
      sections,
    },
  };
};
