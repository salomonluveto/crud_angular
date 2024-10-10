import { Component, inject, Input, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [NgFor,RouterLink,ReactiveFormsModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {

@Input() article !: Article
  articles: Article[] = [];
  articleService: ArticleService = inject(ArticleService);
   supForm = new FormGroup({
    id : new FormControl(0), 
   }
   )
   ngOnInit(){
    try {
      this.articles = this.articleService.getAll();
      
    } catch (error) {
      console.error('Error fetching articles:', error);
    } 
  }

  supprimer(){
    this.articleService.destroy(this.supForm.value.id??0,);
    console.log(this.supForm.value.id);
  }

    
  

}
