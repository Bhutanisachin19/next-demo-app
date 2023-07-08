type RatingObj = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: RatingObj;
};
