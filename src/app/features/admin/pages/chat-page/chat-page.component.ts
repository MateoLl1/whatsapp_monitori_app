import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mensaje } from '../../../../shared/interfaces/mensaje.interface';
import { MensajesService } from '../../../../core/services/mensajes/mensajes.service';
import { Conversacion } from '../../../../shared/interfaces/conversacion.interface';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit, AfterViewInit {
  mensajes: Mensaje[] = [];
  nuevoMensaje = '';
  conversacionId!: number;
  conversacionChat: Conversacion | null = null;

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
      this.loadMessages();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollToBottom(), 0);
  }

  private loadMessages(): void {
    this.mensajesService.findByConversacion(this.conversacionId).subscribe({
      next: (res: Mensaje[]) => {
        this.mensajes = res;
        this.conversacionChat = res.length > 0 ? res[0].conversacion : null;
        setTimeout(() => this.scrollToBottom(), 0);
      },
      error: (err) => {
        console.error('Error al cargar mensajes', err);
      },
    });
  }

  enviarMensaje(): void {
    const texto = this.nuevoMensaje.trim();
    if (!texto || !this.conversacionChat) return;

    const msg: Partial<Mensaje> = {
      mensaje: texto,
      fromMe: true,
      fecha: new Date(),
      conversacion: this.conversacionChat,
    };

    this.mensajesService.create(msg).subscribe({
      next: (res) => {
        this.mensajes.push(res);
        this.nuevoMensaje = '';
        setTimeout(() => this.scrollToBottom(), 0);
      },
      error: (err) => {
        console.error('Error al enviar mensaje', err);
      },
    });
  }

  openImageModal(url: string): void {
    this.scrollPosition = this.chatContainer.nativeElement.scrollTop;
    this.selectedImagen = url;
    this.showImageModal = true;
  }

  closeImageModal(): void {
    this.selectedImagen = null;
    this.showImageModal = false;
    this.chatContainer.nativeElement.scrollTop = this.scrollPosition;
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
