import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private name = 'Lorem';

  person = {
    name: 'John',
    lastname: 'Doe',
    email: 'john.doe@noemail.com'
  }

  getName() {
    return `${this.person.name} ${this.person.lastname}`;
  }
}
