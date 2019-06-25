import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result } from '@zxing/library';

import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-leitor-qr-code',
  templateUrl: './leitor-qr-code.component.html',
  styleUrls: ['./leitor-qr-code.component.scss']
})
export class LeitorQrCodeComponent implements OnInit {

  ngVersion = VERSION.full;

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  constructor(private snackBar: MatSnackBar, private location: Location, private eventoSrv: EventoService) {}

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  a = new AudioContext();

  oficinas : any = [];

  ngOnInit(): void {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      // this.hasDevices = true;
      this.availableDevices = devices;

      // selects the devices's back camera by default
      for (const device of devices) {
          if (/back|rear|environment/gi.test(device.label)) {
              // this.scanner.changeDevice(device);
              this.currentDevice = device;
              break;
          }
      }
    });

    // you can observe if there's devices
    this.scanner.hasDevices.subscribe((x: boolean) => this.hasDevices = x);
    // or you can manually check if the component found them
    // this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((x: Result) => this.qrResult = x);
    this.scanner.permissionResponse.subscribe((x: boolean) => this.hasPermission = x);

    try {
      this.oficinas = this.eventoSrv.listaEvento();
      console.log(this.oficinas);
    } catch (e) {
      console.error(e);
    }

  }

  displayCameras(cameras: MediaDeviceInfo[]) {
    // console.debug('Devices: ', cameras);
    this.availableDevices = cameras;
  }

  handleQrCodeResult(resultString: string) {
    // console.debug('Result: ', resultString);
    this.qrResultString = resultString;
    console.log(resultString);
    let oficinaLida = JSON.parse(resultString);
    let leitura = new Date();
    let achou = 0;
    for (let i=0; i < this.oficinas.length; i++){
      if (this.oficinas[i].cod_oficina == oficinaLida.cod_oficina){
        let iniOficina = new Date(this.oficinas[i].dt_inicio.slice(0,4),
                                  (this.oficinas[i].dt_inicio.slice(4,6)-1),
                                  this.oficinas[i].dt_inicio.slice(6,8),
                                  this.oficinas[i].dt_inicio.slice(9,11),
                                  this.oficinas[i].dt_inicio.slice(12,14));
        let fimOficina = new Date(this.oficinas[i].dt_fim.slice(0,4),
                                  (this.oficinas[i].dt_fim.slice(4,6)-1),
                                  this.oficinas[i].dt_fim.slice(6,8),
                                  this.oficinas[i].dt_fim.slice(9,11),
                                  this.oficinas[i].dt_fim.slice(12,14));
        iniOficina.setMinutes(iniOficina.getMinutes()-(parseInt(this.oficinas[i].inter_inicio)));
        fimOficina.setMinutes(fimOficina.getMinutes()+(parseInt(this.oficinas[i].inter_fim)));
        achou = 1;
        if(leitura >= iniOficina && leitura <= fimOficina){
          this.snackBar.open('Leitura com sucesso!', '', {duration: 3000});
        }
        else{
          this.snackBar.open('Fora do prazo de leitura.', '', {duration: 3000});
        }
      }
    }
    if(achou == 0){
      this.snackBar.open('Oficina não encontrada.', '', {duration: 3000});
    }
    this.beep(100, 520, 200);
    this.location.back();

  }
    // this.snackBar.open(resultString, '', {duration: 2000});


  onDeviceSelectChange(selected: string) {
    // console.debug('Selection changed: ', selected);
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  stateToEmoji(state: boolean): string {

    const states = {
      // not checked
      undefined: '❔',
      // failed to check
      null: '⭕',
      // success
      true: '✔',
      // can't touch that
      false: '❌'
    };

    return states['' + state];
  }

  beep(vol: number, freq: any, duration: number) {
    let v: any;
    let u: any;
    v = this.a.createOscillator();
    u = this.a.createGain();
    v.connect(u);
    v.frequency.value = freq;
    v.type = 'square';
    u.connect(this.a.destination);
    u.gain.value = vol * 0.01;
    v.start(this.a.currentTime);
    v.stop(this.a.currentTime + duration * 0.001);
  }

}