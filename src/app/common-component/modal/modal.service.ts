import { Injectable } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { AddFieldComponent } from './add-field/add-field.component';
import Swal from 'sweetalert2'

@Injectable()
export class ModalService {
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })
  constructor(private SimpleModalService: SimpleModalService) { }

  showPrompt() {
    return this.SimpleModalService.addModal(AddFieldComponent);
  }

  showToast(type, message) {    
    this.Toast.fire({
      type: type,
      title: message
    })
  }

  showModal(type, message) {    
    Swal.fire({
      type: type,
      title: message
    })
  }
}
