import { Injectable } from '@angular/core';
import { IArticle } from '../model/iarticle';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  //create observable
  articleObs$ !:Observable<IArticle[]>;

articles:IArticle[] =[
  {
    id:Math.random(),
    title:'Learn Angular 14',
    description:'Learn Angular 14 is fun'
  },
  {
    id:Math.random(),
    title:'Learn Angular 14',
    description:'Learn Angular 14 is fun1'
  },
  {
    id:Math.random(),
    title:'Learn Angular 14',
    description:'Learn Angular 14 is fun2'
  },
]
  constructor() {
  // this.articleObs$ = Observable.create(this.articles);
    this.articleObs$= of(this.articles);

  }

  getAll():Observable<IArticle[]> {
  return this.articleObs$;
  }


  findOne(id:number){}
}
