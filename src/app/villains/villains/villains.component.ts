import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Villain } from '../../core';
import { VillainService } from '../villain.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  selected: Villain;
  villains$: Observable<Villain[]>;
  loading$: Observable<boolean>;;

  constructor(private villainService: VillainService) {
    this.villains$ = villainService.entities$;
  }

  ngOnInit() {
    this.getVillains();
  }

  add(villain: Villain) {
    this.villainService.add(villain);
  }
  
  delete(villain: Villain) {
    this.villainService.delete(villain);
    this.close();
  }
  
  getVillains() {
    this.villainService.getAll();
    this.close();
  }
  
  update(villain: Villain) {
    this.villainService.update(villain);
  }

  close() {
    this.selected = null;
  }

  
  enableAddMode() {
    this.selected = <any>{};
  }


  select(villain: Villain) {
    this.selected = villain;
  }

}
