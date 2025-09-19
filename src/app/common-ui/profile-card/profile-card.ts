import {Component, Input} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {ImgUrlPipe} from '../../helpers/pipes/img-url-pipe';
import {Profile} from '../../data/interfaces/profile';

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule, ImgUrlPipe],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  @Input() profile!: Profile;
}
