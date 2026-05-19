export type Photo = {
  uri: string;
  width: number;
  height: number;
};

export type StickerCategory = "emoji" | "animals" | "nature" | "people";

export type Sticker = {
  id: string;
  uri: number;
  label: string;
  category: StickerCategory;
};
