import { TestModel } from '../types/test.ts';

export const TEST_DATA_LIST: TestModel[] = [
  {
    answers: [
      { answer: 'Бензин', correct: true },
      { answer: 'Соль', correct: false },
      { answer: 'Хлеб', correct: false },
      { answer: 'Чугун', correct: false },
    ],
    id: 1,
    question: 'Какой продукт получают из нефти?',
  },
  {
    answers: [
      { answer: 'Необработанная нефть', correct: true },
      { answer: 'Обработанная нефть', correct: false },
      { answer: 'Продукт переработки нефти', correct: false },
      { answer: 'Нефтяной газ', correct: false },
    ],
    id: 2,
    question: 'Что такое сырая нефть?',
  },
  {
    answers: [
      { answer: 'Россия', correct: false },
      { answer: 'Саудовская Аравия', correct: false },
      { answer: 'США', correct: false },
      { answer: 'Нигерия', correct: true },
    ],
    id: 3,
    question: 'Какие страны не являются крупнейшими производителями нефти?',
  },
  {
    answers: [
      { answer: 'Бензин', correct: false },
      { answer: 'Пластик', correct: false },
      { answer: 'Электроэнергия', correct: true },
      { answer: 'Металлы', correct: false },
    ],
    id: 4,
    question: 'Какие продукты получаются из природного газа?',
  },
  {
    answers: [
      { answer: 'Китай', correct: true },
      { answer: 'США', correct: false },
      { answer: 'Индия', correct: false },
      { answer: 'Япония', correct: false },
    ],
    id: 5,
    question: 'Какие страны не являются крупнейшими потребителями нефти?',
  },
  {
    answers: [
      { answer: 'Mazda', correct: true },
      { answer: 'Exxon Mobil', correct: false },
      { answer: 'Royal Dutch Shell', correct: false },
      { answer: 'ТатНефть', correct: false },
    ],
    id: 6,
    question: 'Какие компании не являются крупнейшими производителями нефти?',
  },
  {
    answers: [
      { answer: 'Крекинг', correct: false },
      { answer: 'Дистилляция', correct: false },
      { answer: 'Ароматизация', correct: false },
      { answer: 'Конденсация', correct: true },
    ],
    id: 7,
    question: 'Какие процессы не происходят при переработке нефти?',
  },
  {
    answers: [
      { answer: 'Спрос и предложение', correct: true },
      { answer: 'Политическая ситуация', correct: false },
      { answer: 'Геополитические риски', correct: false },
      { answer: 'Технологические инновации', correct: false },
    ],
    id: 8,
    question: 'Какие факторы влияют на цену на нефть?',
  },
  {
    answers: [
      { answer: 'Высокая энергетическая ценность', correct: true },
      { answer: 'Широкий спектр применения', correct: true },
      { answer: 'Легкость добычи', correct: false },
      { answer: 'Низкая стоимость', correct: false },
      { answer: 'Уникальность источника', correct: false },
      { answer: 'Редкость в природе', correct: false },
      { answer: 'Возобновляемость', correct: false },
      { answer: 'Безопасность использования', correct: false },
    ],
    id: 9,
    question: 'Какие свойства делают нефть ценным ресурсом?',
  },
  {
    answers: [
      { answer: 'Бензин', correct: true },
      { answer: 'Дизельное топливо', correct: true },
      { answer: 'Мазут', correct: true },
      { answer: 'Пластик', correct: true },
      { answer: 'Резина', correct: true },
      { answer: 'Асфальт', correct: true },
      { answer: 'Электроэнергия', correct: false },
      { answer: 'Пищевые продукты', correct: false },
    ],
    id: 10,
    question: 'Какие продукты получаются из нефти?',
  },
];
