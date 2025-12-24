import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AsesorService {
  constructor(private http: HttpClient) {}

  crearAsesor(instanceName: string): Observable<any> {
    const url = `${environment.apiEvolutionUrl}/instance/create`;

    const data = {
      instanceName,
      qrcode: false,
      integration: 'WHATSAPP-BAILEYS',
      groupsIgnore: true,
      alwaysOnline: false,
      readMessages: false,
      webhook: {
        url: environment.webhookUrln8n,
        byEvents: false,
        base64: false,
        events: [
          'APPLICATION_STARTUP',
          'QRCODE_UPDATED',
          'MESSAGES_SET',
          'MESSAGES_UPSERT',
          'MESSAGES_UPDATE',
          'MESSAGES_DELETE',
          'SEND_MESSAGE',
          'CONTACTS_SET',
          'CONTACTS_UPSERT',
          'CONTACTS_UPDATE',
          'PRESENCE_UPDATE',
          'CHATS_SET',
          'CHATS_UPSERT',
          'CHATS_UPDATE',
          'CHATS_DELETE',
          'GROUPS_UPSERT',
          'GROUP_UPDATE',
          'GROUP_PARTICIPANTS_UPDATE',
          'CONNECTION_UPDATE',
          'LABELS_EDIT',
          'LABELS_ASSOCIATION',
          'CALL',
          'TYPEBOT_START',
          'TYPEBOT_CHANGE_STATUS'
        ]
      }
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': environment.apiEvolutionKey
    });

    return this.http.post(url, data, { headers });
  }
}
