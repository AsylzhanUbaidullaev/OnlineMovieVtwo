import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getMovie() {
    return this.http.get('assets/db.json');
  }
  // tslint:disable-next-line:typedef
  getUser() {
    return this.http.get('http://localhost:3000/posts');
  }
  postUser(user: User){
    const body = {name: user.name, surname: user.surname, email: user.email, password: user.password, plan : user.plan};
    return this.http.post('http://localhost:3000/users', body);
  }
}
