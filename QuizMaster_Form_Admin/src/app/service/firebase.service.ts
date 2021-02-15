import { Quiz } from './../models/quiz.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private db_path = '/questions';

  quizListRef: AngularFireList<any>;    
  quizRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
    
    CreateQuiz(fullQuiz: Quiz, name: string): Promise<void>{
    var quiz ={};
    quiz[name] = fullQuiz;
    return this.db.object(this.db_path).update(quiz);
    }

    GetQuizList() {
    this.quizListRef = this.db.list(this.db_path);
    return this.quizListRef;
    } 
    
    /* // Fetch Single Student Object
    GetStudent(id: string) {
    this.quizRef = this.db.object('students-list/' + id);
    return this.quizRef;
    }

    // Fetch Students List


    // Update Student Object
    UpdateStudent(student: Student) {
    this.studentRef.update({
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        mobileNumber: student.mobileNumber
    })
    }  

    // Delete Student Object
    DeleteStudent(id: string) { 
    this.studentRef = this.db.object('students-list/'+id);
    this.studentRef.remove();
    }*/

}
