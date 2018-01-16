import { Component, OnInit } from '@angular/core';
import {
  Manor,
  ManorFactory,
  Topology,
  TopologyEffects
} from '../shared/models/manor.model';
import { NumberGenerator } from '../../shared/generators/number-generator';
import { CropGeneratorService } from '../shared/services/crop-generator.service';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.scss']
})
export class ManorComponent implements OnInit {
  manor: Manor;
  dice: NumberGenerator;
  showGenerationInput: boolean;

  constructor(
    private cropService: CropGeneratorService
  ) {}

  ngOnInit() {
    this.dice = new NumberGenerator();
    this._reset();
  }

  private _reset() {
    this.manor = ManorFactory.getManor();
    this.showGenerationInput = true;
  }

  onResetClick() {
    this._reset();
  }

  onGenerateClick() {
    this.showGenerationInput = false;
    this.cropService.generateCrops(this.manor);
  }

}
