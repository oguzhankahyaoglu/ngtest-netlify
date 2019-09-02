import { Component, OnInit } from '@angular/core';
import { ServiceProxy, ProjectContentDto } from 'src/shared/service-proxies/service-proxies';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectContentDto[];

  constructor(private apiGateway: ServiceProxy) { }
  ngOnInit() {
    this.apiGateway.queryProjectContents(100, undefined, undefined, undefined, undefined).subscribe(e => this.projects = e.items);

  }
}
