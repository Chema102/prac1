import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
})
export class BodyComponent{
    mostrar = true;

    frase: any ={
        mensaje: "tengo hambre, alimentame",
        perro: "wau wau wau wau",
        tipo: "chihuahua"
    };

    tiposPerros: string[] = ["pipo","Pipo2","pipo3","Pipo4"];


}