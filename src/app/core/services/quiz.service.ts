import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../../models/quiz.model';
import { File } from '@ionic-native/file/ngx';
import{AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private URL = 'assets/quizes';
  private db_path = '/questions';
  quiz_list: AngularFireList<Quiz>= null;
  quiz_obj: Observable<any>;

  constructor(protected httpClient: HttpClient, private file: File, private db: AngularFireDatabase) {  
    this.quiz_list = this.db.list(this.db_path);
    //this.quiz_obj = this.db.object(this.db_path);
  }

  getQuiz(qid:any): Observable<Quiz> {
    //return this.httpClient.get<Quiz>(`${this.URL}/quiz${qid}.json`);
    this.quiz_obj = this.db.object<any>(this.db_path+'/'+'quiz'+qid).valueChanges();
    return this.quiz_obj;

  }

  /*saveQuizData(quiz: any){

    var fileName = 'userData.json';
    return this.file.checkFile(this.file.dataDirectory,fileName).then(ret=>{
      console.log('File exists');
    }).catch(err => {
      console.log('File does not exist');
      this.file.createFile(this.file.dataDirectory, fileName, true).then(ret2=>{
        console.log('File created');
      }).catch(err2=>{
        console.log('File not created');
      });
    })

    var b = this.file.checkDir(this.file.dataDirectory, 'user').then(_ => console.log('Directory exists')).catch(err =>
    console.log('Directory doesnt exist'));
    return true;
  }*/

}
