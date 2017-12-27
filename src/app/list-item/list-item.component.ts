import { Component, OnInit, Input } from '@angular/core';

import {Project} from '../mock-project';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})


export class ListItemComponent implements OnInit {

  @Input() project: Project;


  constructor() { }

  ngOnInit() {
  }

}
