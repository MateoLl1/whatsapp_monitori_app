import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../../../shared/interfaces/mensaje.interface';
import { MensajesService } from '../../../../core/services/mensajes/mensajes.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
})
export class ChatPageComponent implements OnInit {

  mensajes: Mensaje [] = [];


  constructor(private mensajesService: MensajesService) {
    this.loadMessages();
  }

  ngOnInit(): void {

  }


  loadMessages(){
    this.mensajesService.findAll().subscribe( (men) => {
      console.log({men});
    })
  }

}
