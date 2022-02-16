import { Component, OnInit } from '@angular/core';
import { SquirrelHelper } from '../squirrel-helper/squirrel-helper';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.scss']
})
export class AddonComponent extends SquirrelHelper implements OnInit {

  constructor() { super(); }

  ngOnInit(): void {
    this.initWithSquirrel();
  }

  override onSetSize(size: any): void {
    super.onSetSize(size);
  }

  override onInitState(state: any): void {
    super.onInitState(state);
    if (state != null) {
      
    }
  }

  override onPropertyChange(property: any, value: any): void {
    super.onPropertyChange(property, value);
    
  }


  override onPropertyChangesComplete(): void {
    super.onPropertyChangesComplete();
  }
}
