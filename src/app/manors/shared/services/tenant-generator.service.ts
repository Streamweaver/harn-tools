import { TenantGenerator } from './../generators/tenant-generator';
import { Injectable } from '@angular/core';

@Injectable()
export class TenantGeneratorService {
  private _tg: TenantGenerator;

  constructor() {
    this._tg = new TenantGenerator();
  }

  getGenerator(): TenantGenerator {
    return this._tg;
  }
}
