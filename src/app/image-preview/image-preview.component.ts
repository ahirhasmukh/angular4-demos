import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  image_url: string;

  constructor() { }

  ngOnInit() {}

  readUrl(event) {
   if (event.target.files && event.target.files[0]) {
     var reader = new FileReader();
     reader.onload = (event: any) => {
       this.image_url = event.target.result;
     }
     reader.readAsDataURL(event.target.files[0]);
   }
  }

}
