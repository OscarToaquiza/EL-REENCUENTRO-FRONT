import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { ActivitiesService } from '../services/activities.services';

@Component({
  selector: 'app-activity-home',
  templateUrl: './activity-home.component.html',
  styleUrls: ['./activity-home.component.css']
})
export class ActivityHomeComponent implements OnInit {

  public actividades: any;
  public idioma: boolean;

  constructor(
    private activitiesServ: ActivitiesService,
    private router: Router ,
    private translocoService: TranslocoService 
    ) {
    this.actividades = this.activitiesServ.getActivivities()[0].atividades;
  }

  ngOnInit(): void {
    if(this.translocoService.getActiveLang() === 'en'){
      this.idioma = true; //ingles
    }else{
      this.idioma = false; //español
    }
  }

  verActividad( url:String ){
    this.router.navigateByUrl('/actividades-general/'+url);

  }

}
