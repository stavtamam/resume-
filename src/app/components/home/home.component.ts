import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: any;
  projectsC: any;
  urlSafe: SafeResourceUrl;
  project: Project = {
    name: "",
    icon: "",
    url: ""
  };


  constructor(private ps: ProjectsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ps.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.projectsC = projects;
      // console.log(projects);
    })


    let b = "Stav Tamam ";
    let txt = b.split("");
    $.each(txt, function (k, v) {
      let a = document.createElement("b");
      a.append(v);
      $("b").hover(function () {
        $(this).css({
          "color": "white",
          "textShadow": "0 0 5px #E8C2CA,0 0 5px #A6808C"
        });
      }, function () {
        $(this).css({
          "color": "white",
          "textShadow": "0 0 0"
        });
      });
      $("#head").append(a);


    })

  }

  getProject(projectId, $event) {
    this.ps.getPtoject(projectId).subscribe((project) => {
      this.project = project;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(project.url)
    })
  }

  controlerNext() {
    $("#rightArrow").click(function () {
      $('#outerWrapper').animate({ scrollLeft: '+=460' }, 1000)
    });
  }

  controlerPrev() {
    $("#leftArrow").click(function () {
      $('#outerWrapper').animate({ scrollLeft: '-=460' }, 1000)
    });
  }
  onLoad() { }
}
