## Проект: KidsSafe (название под вопросом)

- Платформа: React Native + Expo managed
- Флоу: выбор фото/камера → стикер по центру → двигаем пальцем → сохранить/поделиться
- Детекция лиц: НЕТ
- Стикеры: готовые PNG (Twemoji/OpenMoji), нейтральные
- Стек: expo-image-picker, react-native-view-shot, expo-media-library, expo-sharing, gesture-handler, reanimated

Для BabyStickers это будет выглядеть так:
src/
├── app/ # Expo Router layout
├── pages/
│ └── editor/ # экран редактора
├── widgets/
│ └── sticker-editor/ # редактор с жестами
├── features/
│ ├── pick-image/ # выбор фото/камера
│ ├── place-sticker/ # разместить стикер
│ └── save-share/ # сохранить/поделиться
├── entities/
│ └── sticker/ # модель стикера (тип, категория)
└── shared/
├── ui/ # базовые компоненты
├── constants/ # категории стикеров
└── assets/ # PNG стикеры

Отличный план! Вот итог всего что обсудили:

BabyStickers — итог планирования
Продукт

Приложение для мам: закрывать лица детей стикерами перед постом в соцсети
Бесплатно на старте, потом ненавязчивая реклама (AdMob)
Цель — вирусность через шаринг

Флоу

Выбрал фото из галереи или сфотографировал → стикер появляется по центру → двигаем/масштабируем пальцем → сохранить в галерею или поделиться

Стикеры

PNG из OpenMoji/Twemoji (бесплатные, одинаково выглядят на iOS и Android)
Категории: природа, животные, люди, обычные эмодзи
Один дефолтный стикер при старте

Технический стек

React Native + Expo managed workflow
TypeScript
Expo Router (уже создан)
expo-image-picker, react-native-view-shot, expo-media-library, expo-sharing, gesture-handler, reanimated

Архитектура

Feature-Sliced Design (FSD)

Workflow

Git + GitHub
Ветки: main → dev → feature/xxx
