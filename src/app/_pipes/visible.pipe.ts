import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({ name: 'visiblepipe' })
export class VisiblePipe implements PipeTransform {
      transform(objects: any[], arg1?:boolean): any[] {
        if(arg1 === undefined || arg1 === null){
            arg1 = true;
        }
        if(objects) {
            return objects.filter(object => {
                return object.visible === arg1;
            });
        }
    }
}