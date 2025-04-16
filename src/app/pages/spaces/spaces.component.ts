import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-spaces',
  imports: [
    CommonModule
  ],
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.css'
})
export class SpacesComponent {


  caganAppsIcons = [
    {id:1, icon: 'bi-flag'},
    {id:2, icon: 'bi-envelope'},
    {id:3, icon: 'bi-tags'},
    {id:4, icon: 'bi-flag'},
    {id:5, icon: 'bi-flag'},
    {id:6, icon: 'bi-flag'},
    {id:7, icon: 'bi-flag'},
    {id:8, icon: 'bi-flag'},
    {id:9, icon: 'bi-flag'},
    {id:10, icon: 'bi-flag'},
  ]

  requiredViews = [
    {id:1, icon: 'bi-flag'},
    {id:2, icon: 'bi-envelope'},
    {id:3, icon: 'bi-tags'},
  ]

}
