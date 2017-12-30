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
  activeIcosArr = [];
  upcomingIcosArr = [];
  endedIcosArr = [];
  scamIcosArr = [];

  activeIcos() {
      this.activeIcosArr = _.filter(this.projects, function(p){
        return p.status === 'ACTIVE';
      });
  }

  upcomingIcos() {
    this.upcomingIcosArr = _.filter(this.projects, function(p){
      return p.status === 'UPCOMING';
    });
  }

  endedIcos() {
    this.endedIcosArr = _.filter(this.projects, function(p){
      return p.status === 'ENDED';
    });
  }

  scamIcos() {
    this.scamIcosArr = _.filter(this.projects, function(p){
      return p.status === 'SCAM';
    });
  }

  constructor() { }

  ngOnInit() {
    this.activeIcos();
    this.upcomingIcos();
    this.endedIcos();
    this.scamIcos();
  }
}
