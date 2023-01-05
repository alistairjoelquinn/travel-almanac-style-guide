export interface StandardItem {
  title: string;
  value: string;
}

export interface Words extends StandardItem {
  category: string;
}

export interface ArrayItem {
  title: string;
  value: string[];
}

export interface InitialState {
  commonWords: Words[];
  punctuation: StandardItem[];
  datesNumbers: ArrayItem[];
  bestPractice: ArrayItem[];
  quickFormatting: ArrayItem[];
  toneOfVoice: StandardItem[] | ArrayItem[];
  searching: boolean;
  searchTerm: string;
}

export interface Action {
  type: string;
  payload?: any;
}
