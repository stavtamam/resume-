import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var Email: any;
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
    tag: "",
    langs: []
  };
  name: string;
  email: string;
  msg: string;



  constructor(private ps: ProjectsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ps.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.projectsC = projects;
      // console.log(projects);

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

  onSubmit({ value, valid }: { value: { name, email, msg }, valid: boolean }) {
    if (valid) {
      Email.send({
        SecureToken: 'a67df091-542f-4292-824b-0cc74cf679de',
        To: 'stavtamam@gmail.com',
        From: 'brunotamam@gmail.com',
        Subject: `messsage from ${value.name}`,
        Body: `<h1>Message from:</h1> <br>
        <h3>Email:${value.email},</h3><br>
        <h3>Name:${value.name},</h3><br><br>
        <h5>${value.msg}</h5>`
      }).then(message => { console.log(message), $(".submit").val("Sent!"); });
      $(".submit").addClass('disabled');
    }
  }


}
