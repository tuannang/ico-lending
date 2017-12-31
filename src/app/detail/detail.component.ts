import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../mock-projects';
import _ from 'lodash';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string;
  projects = projects;
  projectDetail = {};

  getProjectDetail() {
    let projectId = this.id;
      this.projectDetail = _.filter(this.projects, function(p){
        return p.id === projectId;
      })[0];
  }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
        params => this.id = params['id']
    );
  }

  ngOnInit() {
    this.getProjectDetail();
  }
}
