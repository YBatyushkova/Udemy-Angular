import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = ''
  searchField = 'title'
  
 posts: Post[] = [
   {title: 'Beer', text: 'Best drink ever!'},
   {title: 'Wine', text: 'I love it :)'},
   {title: 'Water', text: 'So yammy'}
 ]

 addPost() {
   this.posts.unshift({
     title: 'Angular 8',
     text: 'Angular 8 course'
   })
 }
}
