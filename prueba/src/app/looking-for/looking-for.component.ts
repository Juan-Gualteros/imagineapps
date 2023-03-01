import { Component } from '@angular/core';

@Component({
  selector: 'app-looking-for',
  templateUrl: './looking-for.component.html',
  styleUrls: ['./looking-for.component.scss']
})
export class LookingForComponent {
 constructor(){}

 items =[
  {img: "assets/looking-for/a.png", title: "membresia de coworking", content: "Hot desks, salas, cabinas, telefonicas y mas", cantidad:"Mas de 1"},
  {img: "assets/looking-for/2.png", title: "Oficina Privada", content: "Oficinas listas con amenidades compartidas", cantidad:"1-20+"},
  {img: "assets/looking-for/3.png", title: "Executive Office", content: "Oficinas de primer nivel con amenidades privadas", cantidad:"20-100+"},
  {img: "assets/looking-for/4.png", title: "Sala de reuniones", content: "Salas privadas que se pueden reservar por hora", cantidad:"1-20"}
 ];
 ngOnInit():void{

 }
}
