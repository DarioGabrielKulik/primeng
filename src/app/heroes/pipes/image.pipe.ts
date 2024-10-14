import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/interfaceHeroes';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string): string{

    if(value){
      return 'assets/heroes/'+ value +'.jpg';
    }else{
      return 'assets/no-image.png'
    }
    
  }

}
