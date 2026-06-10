export interface Food {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    price: string;
    description: string;
    photo: number; // This is the Image ID from WordPress
  };
}
export interface ContextType {
  scroll: number;
  setScroll: React.Dispatch<React.SetStateAction<number>>;
  sectionHash: string;
  setSectionHash: React.Dispatch<React.SetStateAction<string>>
}
export interface WUCard {
  id: number;
  title: string;
  content: string;
}
