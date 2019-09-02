import { Component, OnInit } from '@angular/core';
import { ProjectService, ProjectContentDto } from '@angular-schule/okahyaogluapi';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectContentDto[] = [];

  constructor(private apiGateway: ProjectService) { }
  ngOnInit() {
    this.apiGateway.queryProjectContents().subscribe(e => this.projects = e.items);

  }
}
