import { Component, OnInit } from '@angular/core';
declare var $: any;
// import * as $ from 'jquery';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      var text = $(".text");
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
          text.addClass("hidden");
        } else {
          $('.letter').addClass('ghost')
          text.removeClass("hidden");
        }
      });
    });
  }

  scrollTo(target) {
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  }

}
