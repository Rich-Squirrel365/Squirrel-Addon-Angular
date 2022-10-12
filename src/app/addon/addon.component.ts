import { Component, OnInit } from '@angular/core';
import { SquirrelHelper } from '../squirrel-helper/squirrel-helper';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.scss']
})
export class AddonComponent extends SquirrelHelper implements OnInit {

  helloWorldText: string;

  constructor() { super(); }

  ngOnInit(): void {
    this.initWithSquirrel();
  }

  override onSetPosition(position: any): void {
    super.onSetPosition(position);
  }

  override onSetSize(size: any): void {
    super.onSetSize(size);
  }

  override onInitState(state: any): void {
    super.onInitState(state);
    if (state != null) {
      this.processData(state.helloWorldData);
    }
  }

  override onPropertyChange(property: any, value: any): void {
    super.onPropertyChange(property, value);
    switch (property) {
      case 'helloWorldData':
        this.processData(value);
        break;
    }
  }

  override onPropertyChangesComplete(): void {
    super.onPropertyChangesComplete();
  }

  /**
   * Take a string, to be shown in the HTML display, capitalise 
   * the letters and then send back to Squirrel
   * @param value The string to display and return
   */
  processData(value: string) {
    this.helloWorldText = value;
    this.sendToSquirrel('helloWorldResponse', value?.toUpperCase());
  }
}
