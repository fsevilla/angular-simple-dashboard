import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId;
  user = {};
  isLoading = false;

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params.id;

      this.getUserDetails();
    });

    this.activatedRoute.queryParams.subscribe((qp) => {
      console.log('Query params: ', qp);
    });
  }

  ngOnInit() {
  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  getUserDetails() {
    this.isLoading = true;
    this.userService.getUserDetails(this.userId)
      .then(response => {
        console.log('User details: ', response);
        this.user = response;
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      })
      .catch(err => {
        console.error(err);
        this.isLoading = false;
      });
  }

}
