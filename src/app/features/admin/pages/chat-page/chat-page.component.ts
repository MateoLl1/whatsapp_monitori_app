import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mensaje } from '../../../../shared/interfaces/mensaje.interface';
import { MensajesService } from '../../../../core/services/mensajes/mensajes.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit, AfterViewInit {
  mensajes: Mensaje[] = [];
  nuevoMensaje = '';
  conversacionId!: number;

  selectedImagen: string | null = null;
  showImageModal = false;

  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  private scrollPosition = 0;

  constructor(
    private mensajesService: MensajesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.conversacionId = Number(this.route.snapshot.paramMap.get('clienteId'));
    if (this.conversacionId) {
      this.loadMessages(this.conversacionId);
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollToBottom(), 0);
  }

  openImageModal(url: string) {
    const container = this.chatContainer.nativeElement;
    this.scrollPosition = container.scrollTop;
    this.selectedImagen = url;
    this.showImageModal = true;
  }

  closeImageModal() {
    this.selectedImagen = null;
    this.showImageModal = false;
    const container = this.chatContainer.nativeElement;
    container.scrollTop = this.scrollPosition;
  }

  private loadMessages(conversacionId: number): void {
    this.mensajesService.findByConversacion(conversacionId).subscribe({
      next: (res: Mensaje[]) => {
        this.mensajes = res;
        this.scrollToBottom();
      },
      error: (err) => {
        console.error('Error al cargar mensajes', err);
      }
    });
  }

  enviarMensaje(): void {
    if (!this.nuevoMensaje.trim()) return;

    const conversacion = this.mensajes.length > 0
      ? this.mensajes[0].conversacion
      : { id: this.conversacionId } as any;

    const msg: Partial<Mensaje> = {
      mensaje: this.nuevoMensaje,
      fromMe: true,
      fecha: new Date(),
      conversacion: conversacion
    };

    this.mensajesService.create(msg).subscribe({
      next: (res) => {
        this.mensajes.push(res);
        this.nuevoMensaje = '';
        this.scrollToBottom();
      },
      error: (err) => {
        console.error('Error al enviar mensaje', err);
      }
    });
  }

  private scrollToBottom(): void {
    try {
      const container = this.chatContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    } catch (err) {
      console.error('Error al hacer scroll', err);
    }
  }
}
