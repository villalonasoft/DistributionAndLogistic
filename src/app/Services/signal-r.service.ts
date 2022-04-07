import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { Orders } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: Orders[];
  public broadscastData: Orders[];

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:5001/hubs/orders')
                            .configureLogging(signalR.LogLevel.Information)
                            .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferOrderDataListener = () => {
    this.hubConnection.on('ListOrders', (data) => {
      this.data = data;
      console.log(data);
    });
  }
}
