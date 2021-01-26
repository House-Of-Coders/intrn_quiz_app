import { Answer } from './answer.model';

export interface Question {
  id:number
  name: string
  type:string
  marks: number
  answers : Answer[]
}