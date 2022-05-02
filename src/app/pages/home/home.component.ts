import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public titleTxt = "Home - Weather App"
  public description = "Weather app es una web app que te muestra el clima antes de que suceda"

  constructor(
    private meta: Meta,
    private title: Title
  ) {

    this.title.setTitle(this.titleTxt);
    // Añadir el tag de la info de la página
    this.meta.addTags([
      { name: 'description', content: this.description },
      { name: 'og:title', content: this.titleTxt },
      { name: 'og:image', content: '<nombre de la pagina> page' },
      { name: 'og:url', content: '<nombre de la pagina> page' },
      { name: 'og:description', content: this.description },
      { name: 'twitter:title', content: this.titleTxt },
      { name: 'twitter:description', content: this.description },
      { name: 'twitter:image', content: '<nombre de la pagina> page' }
    ]);
  }

  ngOnInit():void {
  }


}
