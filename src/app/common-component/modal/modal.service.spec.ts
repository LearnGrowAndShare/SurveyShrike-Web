import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { SimpleModalService } from 'ngx-simple-modal';
const simpleModalServiceMock = {
  addModal: () => {}
}
describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [ModalService, {provide: SimpleModalService, userValue: simpleModalServiceMock}]}));

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
