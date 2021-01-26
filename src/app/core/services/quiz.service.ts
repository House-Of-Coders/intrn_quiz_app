import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../../models/quiz.model';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private readonly URL = 'assets/quizes';

  constructor(
    protected httpClient: HttpClient,
    private file: File
  ) {
    // this.file.dataDirectory = 'assets';
  }

  getQuiz(qid): Observable<Quiz> {
    return this.httpClient.get<Quiz>(`${this.URL}/quiz${qid}.json`);
  }

  saveQuizData(quiz: any){
    // var a = this.file.writeFile(this.file.dataDirectory, 'userData.json', 'hello sajja', {replace: true});

    // var b = this.file.readAsText(this.file.dataDirectory,'userData.json');
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

    // var b = this.file.checkDir(this.file.dataDirectory, 'user').then(_ => console.log('Directory exists')).catch(err =>
    //   console.log('Directory doesnt exist'));
    // return true;
  }

}
