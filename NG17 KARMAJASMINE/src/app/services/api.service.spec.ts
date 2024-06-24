import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

// describe('ApiService', () => {
//   let service: ApiService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({ imports: [HttpClientModule] });
  //   service = TestBed.inject(ApiService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  // it('getSimpleValue should return the text in uppercase', () => {
  //   expect(service.getSimpleValue('hello world')).toBe('HELLO WORLD');
  // })

  // it('getUsers should return the API value in the form of an Observable', (done: DoneFn) => {
  //   service.getUsers().subscribe(value => {
  //     expect(value.results.length).toBe(10);
  //     done();
  //   })
  // })

  // it('ApiService getUsersProm should return the value of the API in the form of a Promise', (done: DoneFn) => {
  //   service.getUsersProm().then(value => {
  //     expect(value.page).toBe(1);
  //     done();
  //   })
  // })

//});
