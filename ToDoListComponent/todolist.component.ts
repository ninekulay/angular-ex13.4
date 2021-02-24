import { Component  } from'@angular/core';

@Component({
    selector:'app-todolist',
    templateUrl:'./todolist.component.html',
})
export class ToDoListComponent { 
    items = []; 
    newTask;
    constructor() {} 
    addTask() { 
        this.items.push(this.newTask); 
        this.newTask = ''; 
    }  
    deleteTask(index) { 
        this.items.splice(index,1); 
    } 
} 