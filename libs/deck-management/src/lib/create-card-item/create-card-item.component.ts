import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {S3Service} from 'libs/shared/services/s3.service';
import {Card} from '../data-acess/models/card.model';
import {UploadResponse} from 'aws-s3-upload-ash/dist/types';
@Component({
  selector: 'exe-project-create-card-item',
  templateUrl: './create-card-item.component.html',
  styleUrls: ['./create-card-item.component.scss'],
})
export class CreateCardItemComponent implements OnInit {
  childForm!: FormGroup;
  cardItem: Card = {
    front_content: '',
    front_description: '',
    front_sound_url: '',
    front_image_url: '',
    back_content: '',
    back_description: '',
    back_sound_url: '',
    back_image_url: '',
  };
  constructor(private formBuilder: FormBuilder, private s3Service: S3Service) {}
  @Output() deleteComponent: EventEmitter<void> = new EventEmitter<void>();
  @Output() listenFormParent: EventEmitter<Card> = new EventEmitter<Card>();

  ngOnInit(): void {
    this.childForm = this.formBuilder.group({
      front_content: [''],
      front_description: [''],
      front_sound_url: [''],
      front_image_url: [''],

      back_content: [''],
      back_description: [''],
      back_sound_url: [''],
      back_image_url: [''],
    });
  }
  onDelete() {
    this.deleteComponent.emit();
  }

  listenFromParent() {
    this.listenFormParent.emit(this.cardItem);
  }

  async onSoundFrontSelected(event: any) {
    const data = await this.s3Service
      .uploadFileToS3(event.target.files[0])
      .then((data: any) => {
        this.cardItem.front_sound_url = data.location;
        this.listenFromParent();
      });
  }
  async onSoundBackSelected(event: any) {
    await this.s3Service
      .uploadFileToS3(event.target.files[0])
      .then((data: any) => {
        this.cardItem.back_sound_url = data.location;
        this.listenFromParent();
      });
  }
  async onImgFrontSelected(event: any) {
    const data = await this.s3Service
      .uploadFileToS3(event.target.files[0])
      .then((data: any) => {
        this.cardItem.front_image_url = data.location;
        this.listenFromParent();
      });
  }
  async onImgBackSelected(event: any) {
    await this.s3Service
      .uploadFileToS3(event.target.files[0])
      .then((data: any) => {
        this.cardItem.back_image_url = data.location;
        this.listenFromParent();
      });
  }
  onlargeInputFront(event: any) {
    this.cardItem.front_content = event.target.value;
    this.listenFromParent(); // Truyền giá trị lên component cha
  }
  ondescriptionFront(event: any) {
    this.cardItem.front_description = event.target.value;
    this.listenFromParent(); // Truyền giá trị lên component cha
  }
  onlargeInputBack(event: any) {
    this.cardItem.back_content = event.target.value;
    this.listenFromParent(); // Truyền giá trị lên component cha
  }
  ondescriptionBack(event: any) {
    this.cardItem.back_description = event.target.value;
    this.listenFromParent(); // Truyền giá trị lên component cha
  }
}
