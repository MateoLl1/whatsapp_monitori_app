import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private mensajesService: MensajesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const conversacionId = Number(this.route.snapshot.paramMap.get('clienteId'));
    if (conversacionId) {
      this.loadMessages(conversacionId);
    }
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private loadMessages(conversacionId: number): void {
    this.mensajesService.findByConversacion(conversacionId).subscribe({
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
