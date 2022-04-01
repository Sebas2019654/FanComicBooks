import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styles: [
  ]
})
export class YoutubeComponent implements OnInit {
  videos=[

    {

      video:'EWFMkOvY9cM'
    },
    {

      video:'t14wC0Bw_xk'
    },
    {

      video:'AK8JHUIshXg'
    },
    {

      video:'7Y4w1PvuZBw'
    },
    {

      video:'6xvm7Rc1ZYU'
    },
    {

      video:'D4MOPbKStbY'
    }

  ];
  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  
  }

}
