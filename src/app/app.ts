import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCard} from './common-ui/profile-card/profile-card';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard, JsonPipe, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
