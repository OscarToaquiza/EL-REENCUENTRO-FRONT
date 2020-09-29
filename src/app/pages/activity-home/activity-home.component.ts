import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../services/activities.services';

@Component({
  selector: 'app-activity-home',
  templateUrl: './activity-home.component.html',
  styleUrls: ['./activity-home.component.css']
})
export class ActivityHomeComponent implements OnInit {

  public actividades: any;

  constructor(private activitiesServ: ActivitiesService) {
    this.actividades = this.activitiesServ.getActivivities()[0].atividades;
    console.log(this.actividades);
  }

  ngOnInit(): void {
  }



}
