import { Component } from "@angular/core";



@Component({
    selector: 'app-counter',
    template: `

    <h3> {{counter}} </h3>
    <button (click)="aumentarContador(1)" >+1</button>
    <button (click)="resetCounter()" >Reset</button>
    <button (click)="aumentarContador(-1)" >-1</button>
    `
})

export class CounterComponent{

    public counter: number = 10;

    aumentarContador( valor:number ){
        this.counter += valor;
    }

    resetCounter():void {
        this.counter = 10;
    }

}