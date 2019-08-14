import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btnPreprocess'
})
export class BtnPreprocessPipe implements PipeTransform {

  // tslint:disable-next-line:variable-name
  transform(btn_type): any {
    return `${btn_type.name} (${btn_type.code})`;
  }

}
