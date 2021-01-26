import { Question } from './question.model';

export interface Quiz {
  id:number
  name: string
  time:number
  pass_mark: number
  questions : Question[]
  total_questions: number;
}