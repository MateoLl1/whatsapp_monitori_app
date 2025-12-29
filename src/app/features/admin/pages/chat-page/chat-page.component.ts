import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Mensaje } from '../../../../shared/interfaces/mensaje.interface';
import { MensajesService } from '../../../../core/services/mensajes/mensajes.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit, AfterViewChecked {

  mensajes: Mensaje[] = [];

  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  constructor(private mensajesService: MensajesService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private loadMessages(): void {
    this.mensajesService.findAll().subscribe({
      next: (res: Mensaje[]) => {
        this.mensajes = res;
      },
      error: (err) => {
        console.error('Error al cargar mensajes', err);
      }
    });
  }

  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error al hacer scroll', err);
    }
  }
}
