type CardProps = {
  word: string;
  meaning: string;
  id: number;
};

type DeckComponentProps = {
  title: string;
    id: number;
  cards: CardProps[]
};

type AddboxProps = {
  deckID: number;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
  add: boolean;
  card: boolean;
  numOfCards: number;
  setNumOfCards: React.Dispatch<React.SetStateAction<number>>;
};

export {CardProps, DeckComponentProps, AddboxProps}