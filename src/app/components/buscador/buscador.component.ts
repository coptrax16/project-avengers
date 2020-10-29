import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroe: any = [];
  termino: string;
  constructor(private activeRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(dato => {
      this.heroe = this.heroesService.buscadorHeroe(dato.ter);
      this.termino = dato.ter;
    });
  }
  verHeroe(id: number)
  {
    this.router.navigate(['/heroe', id] );
  }


}
