import { Component, OnInit } from '@angular/core';
import {IArticle} from "../shared/model/iarticle";
import {ArticleService} from "../shared/services/article.service";
import {filter, map, Observable, of} from "rxjs";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  article_list!:IArticle[] ;

  observable_ArticleList$!:Observable<IArticle[]>;

   data$ = of(1, 2, 3, 4, 5,6)

     .pipe(filter(num => num % 2 === 0),map(num => num * num));



  constructor(private _articleService:ArticleService) { }

  ngOnInit(): void {
    // this.article_list = this._articleService.articles;
    this.observable_ArticleList$ = this._articleService.getAll();
    console.log(this.observable_ArticleList$);


    this._articleService.getAll().subscribe((articles:IArticle[])=>{
      this.article_list = articles;
    })

    this.data$.subscribe( (num) => console.log(num));

  }

}
