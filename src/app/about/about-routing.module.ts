import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { HistoryComponent } from './history/history.component';

const route: Routes = [
  {
    path: '',
    children:[
      { 
        path: 'mision', component:MissionComponent, 
        data: { 
          titulo: 'Misión - El Reencuentro', 
          descripcion: 'Brindar el servicio de aventura y naturaleza con una infraestructura que da alusión al ambiente familiar' 
        } 
      },
      { path: 'vision', component:VisionComponent,  
        data: { 
          titulo: 'Visión - El Reencuentro',
          descripcion: 'Al 2023 llegar a ser una empresa líder en el servicio turístico que da a conocer la belleza de la aventura y naturaleza dentro del cantón Mejía' 
        }
      },
      { path: 'historia', component:HistoryComponent, 
        data: { 
          titulo: 'Historia - El Reencuentro',
          descripcion: 'Nace con la ideología de ejercer el turismo familiar dentro de la Parroquia de Machachi; rescatando así la historia de nuestra familia'
        } 
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ]
})
export class AboutRoutingModule { }
