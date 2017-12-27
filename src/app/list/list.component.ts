import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { projects } from '../mock-projects';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  projects = projects;
  ratedProjectArr = [];
  notRatedProjectArr = [];

  ratedProject() {
      this.ratedProjectArr = _.filter(this.projects, function(p){
        return p.is_rated;
      });
  }

  notRatedProject() {
    this.notRatedProjectArr = _.filter(this.projects, function(p){
      return !p.is_rated;
    });
  }

  constructor() { }

  ngOnInit() {
    this.ratedProject();
    this.notRatedProject();
  }

}
