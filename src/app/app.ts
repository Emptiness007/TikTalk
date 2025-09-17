import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCard} from './common-ui/profile-card/profile-card';
import {ProfileService} from './data/services/profile-service';
import { JsonPipe, NgFor } from '@angular/common';
import {Profile} from './data/interfaces/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard, JsonPipe, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  profileService = inject(ProfileService) //запросили наш сервис
  profiles: Profile[] = [] //массив профилей

  constructor() {
    this.profileService.getTestAccounts()
      .subscribe(val =>{
        this.profiles = val
      })
  }
}
