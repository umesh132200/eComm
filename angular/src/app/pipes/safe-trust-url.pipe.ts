import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeTrustUrl'
})
export class SafeTrustUrlPipe implements PipeTransform {
  constructor(private domSanitizer:DomSanitizer){}

  transform(value: any): any {
    return this.domSanitizer.bypassSecurityTrustUrl(value);
  }

}
