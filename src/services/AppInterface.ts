export type WordType = {
  [key: string]: any;
}

export type SentenceType = {
  id: string;
  sentence: string;
  suggestions: string[];
}

export type PhraseType = {
  id: string;
  phrase: string;
  suggestions: string[];
}

export type QuestionType = {
  id: string;
  sentence: string;
  suggestions: string[];
}
