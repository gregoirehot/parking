import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({ name: 'mainpipe' })
export class MainPipe implements PipeTransform {
      transform(objects: any[], arg1?:boolean): any[] {
        if(arg1 === undefined || arg1 === null){
            arg1 = false;
        }
        if(objects) {
            return objects.filter(object => {
                return object.main === arg1;
            });
        }
    }
}