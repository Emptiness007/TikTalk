import {Component, inject} from '@angular/core';
import {ProfileService} from '../../data/services/profile-service';
import {Profile} from '../../data/interfaces/profile';
import {ProfileCard} from '../../common-ui/profile-card/profile-card';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css'
})
export class SearchPage {
  profileService = inject(ProfileService) //запросили наш сервис
  profiles: Profile[] = [] //массив профилей

  constructor() {
    this.profileService.getTestAccounts()
      .subscribe(val =>{
        this.profiles = val
      })
  }
}
