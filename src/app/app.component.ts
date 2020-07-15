import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Dynamic title'
  // number = 42
  // arr = [1, 2, 3]

  // obj = {a: 1, b: {c: 2}}

  // inputValue = ''

  // img = 'https://cdn.freebiesupply.com/logos/thumbs/2x/react-1-logo.png'

  //constructor() {
    // setTimeout(() => {
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png'
    // }, 5000);
  //}

// onClick() {
//   console.log('Click')
// }

// onInput(event: KeyboardEvent) {
//   this.inputValue = (<HTMLInputElement>event.target).value
// }

// onBlur(str: string) {
//   this.inputValue = str
// }

  // title = 'Initial'

  // onInput(event: any) {
  //   this.title = event.target.value
  // }

  // backgroundToggle = false

  // toggle: any = false

  // arr = [1, 1, 2, 3, 5, 8, 13]

  // objs = [
  //   {title: 'Post1', author: 'Yulia', comments: [
  //     {name: 'User1',text: 'lorem1'},
  //     {name: 'User2',text: 'lorem2'},
  //     {name: 'User3',text: 'lorem3'}
  //   ]},
  //   {title: 'Post2', author: 'Yulia2', comments: [
  //     {name: 'User12',text: 'lorem12'},
  //     {name: 'User22',text: 'lorem22'},
  //     {name: 'User32',text: 'lorem32'}
  //   ]}
  // ]

  now: Date = new Date()
}
