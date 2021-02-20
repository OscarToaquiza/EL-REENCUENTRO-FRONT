import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  //public actividadees:any = [];

  private actividades: any =
    [
      {
        "atividades": [
          {
            "codigo": 1,
            "nombre": "casa_arbol",
            "nombre_es": "Casa del Árbol",
            "nombre_en": "Tree House",
            "descripcion_es": "Casa árbol​ es una casa o caseta de madera construida en las ramas de un árbol, o cerca del tronco de uno o varios árboles. Pueden diseñarse para ser habitadas, o también para uso recreativo de los niños.",
            "descripcion_en": "Tree house is a wooden house or hut built in the branches of a tree, or near the trunk of one or more trees. They can be designed to be inhabited, or also for recreational use by children.",
            "ruta": "casa-arbol",
            "img": "assets/images/actividades/el_reencuentro_casa_arbol.jpeg",
            "icono": "fa fa-home",
            "proximo": false
          },
          {
            "codigo": 2,
            "nombre": "pared_escalada",
            "nombre_es": "Pared de Escalada",
            "nombre_en": "Climbing Wall",
            "descripcion_es": "Casa árbol​ es una casa o caseta de madera construida en las ramas de un árbol, o cerca del tronco de uno o varios árboles. Pueden diseñarse para ser habitadas, o también para uso recreativo de los niños.",
            "descripcion_en": "",
            "ruta": "pared-escalda",
            "img": "assets/images/actividades/el_reencuentro_pared_escalada.jpeg",
            "icono": "fa fa-home",
            "proximo": false
          },
          {
            "codigo": 3,
            "nombre": "granja",
            "nombre_es": "Granja",
            "nombre_en": "Farm",
            "descripcion_es": "Casa árbol​ es una casa o caseta de madera construida en las ramas de un árbol, o cerca del tronco de uno o varios árboles. Pueden diseñarse para ser habitadas, o también para uso recreativo de los niños.",
            "descripcion_en": "",
            "ruta": "granja",
            "img": "assets/images/actividades/el_reencuentro_granja.jpg",
            "icono": "fa fa-home",
            "proximo": false
          },
          {
            "codigo": 4,
            "nombre": "camping",
            "nombre_es": "Camping",
            "nombre_en": "Camping",
            "descripcion_es": "Casa árbol​ es una casa o caseta de madera construida en las ramas de un árbol, o cerca del tronco de uno o varios árboles. Pueden diseñarse para ser habitadas, o también para uso recreativo de los niños.",
            "descripcion_en": "",
            "ruta": "camping",
            "img": "assets/images/actividades/el_reencuentro_camping.jpeg",
            "icono": "fa fa-home",
            "proximo": false
          },
          {
            "codigo": 5,
            "nombre": "restaurante",
            "nombre_es": "Restaurante",
            "nombre_en": "Restaurant",
            "descripcion_es": "Casa árbol​ es una casa o caseta de madera construida en las ramas de un árbol, o cerca del tronco de uno o varios árboles. Pueden diseñarse para ser habitadas, o también para uso recreativo de los niños.",
            "descripcion_en": "",
            "ruta": "restaurante",
            "img": "assets/images/actividades/el_reencuentro_restaurante.jpeg",
            "icono": "fa fa-home",
            "proximo": false
          },
          {
            "codigo": 6,
            "nombre": "sedero_ecologico",
            "nombre_es": "Sendero Ecológico",
            "nombre_en": "Ecological pathway",
            "descripcion_es": "Casa árbol​ es una casa o caseta de madera construida en las ramas de un árbol, o cerca del tronco de uno o varios árboles. Pueden diseñarse para ser habitadas, o también para uso recreativo de los niños.",
            "descripcion_en": "",
            "ruta": "sendero-ecologico",
            "img": "assets/images/actividades/el_reencuentro_sendero_ecologico.jpg",
            "icono": "fa fa-home",
            "proximo": false
          },
          {
            "codigo": 7,
            "nombre": "pesca_deportiva",
            "nombre_es": "Pesca Deportiva",
            "nombre_en": "Sport fishing",
            "descripcion_es": "Casa árbol​ es una casa o caseta de madera construida en las ramas de un árbol, o cerca del tronco de uno o varios árboles. Pueden diseñarse para ser habitadas, o también para uso recreativo de los niños.",
            "descripcion_en": "",
            "ruta": "pesca_deportiva",
            "img": "assets/images/actividades/el_reencuentro_proximo.jpeg",
            "icono": "fa fa-home",
            "proximo": true
          },
          {
            "codigo": 8,
            "nombre": "mini_spa",
            "nombre_es": "Mini Spa",
            "nombre_en": "Mini Spa",
            "descripcion_es": "Casa árbol​ es una casa o caseta de madera construida en las ramas de un árbol, o cerca del tronco de uno o varios árboles. Pueden diseñarse para ser habitadas, o también para uso recreativo de los niños.",
            "descripcion_en": "",
            "ruta": "mini_spa",
            "img": "assets/images/actividades/el_reencuentro_proximo.jpeg",
            "icono": "fa fa-home",
            "proximo": true
          }
        ]
      }

    ];


  constructor() { }

  getActivivities() {
    return this.actividades;
  }

}
