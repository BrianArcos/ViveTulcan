import { Component, OnInit } from '@angular/core';
import { RespAtractivos } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ActivatedRoute } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-detalle-atractivo',
  templateUrl: './detalle-atractivo.page.html',
  styleUrls: ['./detalle-atractivo.page.scss'],
})
export class DetalleAtractivoPage implements OnInit {

  lista_A : RespAtractivos;
  oculto= 120;
  constructor( private atractivService: EstablecimientosService,
               private state: ActivatedRoute,
               private navegador:InAppBrowser,
               private call: CallNumber) { }

  ngOnInit() {
    this.lista_A = JSON.parse(this.state.snapshot.params.datos)
  }

  openWeb(lista:string, target:string){
    const link = lista
    this.navegador.create(link, target)
    // this.navegador.create('https://www.google.com','_self')

  }

  openFb(lista:string, target:string){
    const id = lista
    this.navegador.create(id, target)

  }

  calln(lista:string){
    this.call.callNumber (lista, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }


}
