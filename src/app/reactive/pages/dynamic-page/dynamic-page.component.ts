import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Clair Obscure, Expedition 33', Validators.required],
      ['Hollow Knight', Validators.required],
    ],
      Validators.minLength(3)
    ),
  });

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }
}
