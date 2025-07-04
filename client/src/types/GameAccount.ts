export interface IGameAccount {
  author: string;
  game: "PUBG" | "Fortnite" | "CSGO" | "Call of Duty" | "";
  region: string;
  price: number; // in o'zbek so'm
  description: string;
  image?: string;
  seller: string;
  buyer?: string;
  status: "available" | "pending" | "sold";
  video: string;
  name: string;
  _id: string;
}