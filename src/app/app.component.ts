import { Component, OnInit } from '@angular/core';
import { callbackify } from 'util';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Хочу выучить Angular', text: 'Всё еще учу компоненты', id: 1},
    {title: 'Следующий блок', text: 'Будет про директивы и пайпы', id: 2}
  ]

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('Timeout')
    //   this.posts[0] = {
    //     title: "Changed!",
    //     text: "qwerty",
    //     id: 32
    //   }
    // }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    console.log('Id to remove', id)
    this.posts = this.posts.filter( p => p.id !== id)
  } 
}
