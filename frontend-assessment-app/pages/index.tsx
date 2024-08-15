import { CardGrid, HomePageBanner } from "@/components";

const cards = [
  {
    alt: "alt image 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae quaerat vitae reiciendis quis at?",
    imageUrl: "https://via.placeholder.com/400x300",
    link: "https://via.placeholder.com/400x300",
  },
  {
    alt: "alt image 2",
    description: "Lorem ipsum dolor sit amet.",
    imageUrl: "https://via.placeholder.com/400x300",
    link: "https://via.placeholder.com/400x300",
  },
  {
    alt: "alt image 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt?",
    imageUrl: "https://via.placeholder.com/400x300",
    link: "https://via.placeholder.com/400x300",
  },
];
export default function Home() {
  return (
    <main className={"flex min-h-screen flex-col items-center"}>
      <HomePageBanner
        alt="Hero Banner"
        title="Hello Developer!"
        desktopSrc="https://via.placeholder.com/1920x650"
        mobileSrc="https://via.placeholder.com/600x600"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <section>
        <CardGrid cards={cards} />
      </section>
    </main>
  );
}
