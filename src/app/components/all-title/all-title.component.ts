import { Component } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-all-title',
  templateUrl: './all-title.component.html',
  styleUrls: ['./all-title.component.css']
})
export class AllTitleComponent {

  public titulosSubs$: Subscription;

  constructor( private router:Router, private title: Title, private meta: Meta ) { 

   this.titulosSubs$ = this.getDataRouter().subscribe(
      data => {
        this.title.setTitle(data.titulo);
          const metaTag: MetaDefinition = {
            name: 'description',
            content: data.descripcion
          };
          this.meta.updateTag(metaTag);
      }
    );

  }
  ngOnDestroy(): void {
    this.titulosSubs$.unsubscribe();
  }

  getDataRouter(){
    return this.router.events
    .pipe(
      filter(
        respo => respo instanceof ActivationEnd  
      ),
      filter(
        (respo: ActivationEnd) => respo.snapshot.firstChild === null
      ),
      map(
        (respo: ActivationEnd) => respo.snapshot.data 
      ),
    )
  }
}
