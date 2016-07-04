// import { Component } from '@angular/core';
// export class Hero {
//    name: string;
//    heros: [string];
// }
// @Component({
//   selector: 'my-app',
//   template: `
//     <h1>{{title}}</h1>
//     <li>{{hero.name}}</li>
//     <ul class="heros">
//     <li *ngFor="let hero of heros"> 
//     <h2>{{hero.name}}</h2>
//     </ul>
//               <input [(ngModel)]="hero.name" placeholder="name">
//    <
//     `
// })
// export class AppComponent {


// }




import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <input #newTodo
      (keyup.enter)="addtodo(newTodo.value)"
      (blur)="addtodo(newTodo.value); newTodo.value='' ">

    <button (click)=addtodo(newTodo.value)>Add</button>

    <ul><li *ngFor="let todo of todos;let i = index">{{todo}}<button (click)=delTodo(i)>Delete</button></li></ul>
  `
})
export class LittleTourComponent {
  todos = ['fahad'];
  addtodo(newTodo: string) {
    if (newTodo) {
      this.todos.push(newTodo);
    }
  }
  delTodo(i: number) {
      this.todos.splice(i,1);
  }
}


