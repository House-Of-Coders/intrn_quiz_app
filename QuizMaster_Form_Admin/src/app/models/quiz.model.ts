import { Question } from './question.model';

export interface Quiz {
  name: string
  time:number
  pass_mark: number
  total_questions: number
  questions : Question[]

}