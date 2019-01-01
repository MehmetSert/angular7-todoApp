import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient
  ) { }

  addTodo(obj) {
    return this.http.post(this.apiUrl + '/todo', obj);
  }

  getAllTodos() {
    return this.http.get(this.apiUrl + '/todo');
  }

  updateTodo(obj) {
    return this.http.put(this.apiUrl + '/todo', obj);
  }

  removeTodo(id) {
    return this.http.delete(this.apiUrl + '/todo/' + id);
  }

}
