import { Sticker } from "@/shared";

export const STICKERS: Sticker[] = [
  // Emoji
  { id: "emoji-1", label: "Улыбка", category: "emoji", uri: require("../../../assets/stickers/emoji/1f60a.png") },
  { id: "emoji-2", label: "Смех", category: "emoji", uri: require("../../../assets/stickers/emoji/1f602.png") },
  { id: "emoji-3", label: "Влюблённость", category: "emoji", uri: require("../../../assets/stickers/emoji/1f970.png") },
  { id: "emoji-4", label: "Крутой", category: "emoji", uri: require("../../../assets/stickers/emoji/1f60e.png") },
  { id: "emoji-5", label: "Восторг", category: "emoji", uri: require("../../../assets/stickers/emoji/1f929.png") },
  { id: "emoji-6", label: "Дразнит", category: "emoji", uri: require("../../../assets/stickers/emoji/1f61c.png") },

  // Animals
  { id: "animals-1", label: "Кошка", category: "animals", uri: require("../../../assets/stickers/animals/1f431.png") },
  { id: "animals-2", label: "Собака", category: "animals", uri: require("../../../assets/stickers/animals/1f436.png") },
  { id: "animals-3", label: "Мишка", category: "animals", uri: require("../../../assets/stickers/animals/1f43b.png") },
  { id: "animals-4", label: "Зайчик", category: "animals", uri: require("../../../assets/stickers/animals/1f430.png") },
  { id: "animals-5", label: "Лиса", category: "animals", uri: require("../../../assets/stickers/animals/1f98a.png") },
  { id: "animals-6", label: "Панда", category: "animals", uri: require("../../../assets/stickers/animals/1f43c.png") },

  // Nature
  { id: "nature-1", label: "Сакура", category: "nature", uri: require("../../../assets/stickers/nature/1f338.png") },
  { id: "nature-2", label: "Гибискус", category: "nature", uri: require("../../../assets/stickers/nature/1f33a.png") },
  { id: "nature-3", label: "Солнце", category: "nature", uri: require("../../../assets/stickers/nature/1f31e.png") },
  { id: "nature-4", label: "Звезда", category: "nature", uri: require("../../../assets/stickers/nature/2b50.png") },
  { id: "nature-5", label: "Облако", category: "nature", uri: require("../../../assets/stickers/nature/2601.png") },
  { id: "nature-6", label: "Луна", category: "nature", uri: require("../../../assets/stickers/nature/1f319.png") },

  // People
  { id: "people-1", label: "Ребёнок", category: "people", uri: require("../../../assets/stickers/people/1f9d2.png") },
  { id: "people-2", label: "Девочка", category: "people", uri: require("../../../assets/stickers/people/1f467.png") },
  { id: "people-3", label: "Мальчик", category: "people", uri: require("../../../assets/stickers/people/1f466.png") },
  { id: "people-4", label: "Человек", category: "people", uri: require("../../../assets/stickers/people/1f9d1.png") },
  { id: "people-5", label: "Малыш", category: "people", uri: require("../../../assets/stickers/people/1f476.png") },
  { id: "people-6", label: "Игрушка", category: "people", uri: require("../../../assets/stickers/people/1f9f8.png") },
];

export const DEFAULT_STICKER = STICKERS[0];
