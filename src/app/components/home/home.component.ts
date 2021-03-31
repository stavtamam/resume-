import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
    url: "",
    img: "",
    description: "",
    langs: []
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


  slideOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    center: true,
    dots: false,
    margin: 10,
    animateIn: true,
    navSpeed: 600,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },

  }


}
