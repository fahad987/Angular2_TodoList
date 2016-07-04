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
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// }
var core_1 = require('@angular/core');
var LittleTourComponent = (function () {
    function LittleTourComponent() {
        this.todos = ['fahad'];
    }
    LittleTourComponent.prototype.addtodo = function (newTodo) {
        if (newTodo) {
            this.todos.push(newTodo);
        }
    };
    LittleTourComponent.prototype.delTodo = function (i) {
        this.todos.splice(i, 1);
    };
    LittleTourComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <input #newTodo\n      (keyup.enter)=\"addtodo(newTodo.value)\"\n      (blur)=\"addtodo(newTodo.value); newTodo.value='' \">\n\n    <button (click)=addtodo(newTodo.value)>Add</button>\n\n    <ul><li *ngFor=\"let todo of todos;let i = index\">{{todo}}<button (click)=delTodo(i)>Delete</button></li></ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], LittleTourComponent);
    return LittleTourComponent;
}());
exports.LittleTourComponent = LittleTourComponent;
//# sourceMappingURL=app.component.js.map