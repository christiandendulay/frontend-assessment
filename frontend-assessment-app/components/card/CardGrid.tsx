import { Card, CardProps } from "./Card";

export type CardGridProps = {
  cards: CardProps[];
};

export const CardGrid = ({ cards }: CardGridProps) => {
  if (cards.length === 0) {
    return null;
  }

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 my-10">
      {cards.map((card) => (
        <li className="box-border" key={JSON.stringify(card)}>
          <Card {...card} />
        </li>
      ))}
    </ul>
  );
};
