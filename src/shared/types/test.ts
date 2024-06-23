export interface TestModel {
  answers: Answer[];
  id: number;
  question: string;
}

export interface Answer {
  answer: string;
  correct: boolean;
}

export interface TestLog {
  id: string;
  questions: TestModel[];
  time: number;
}
