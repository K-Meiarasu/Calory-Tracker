import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Pipe({
  name: 'searchfood'
})
export class FilterPipe implements PipeTransform {

  transform(value: any ,element:string){
    const final=[];
    for(const foods of value)
    {
      if(foods['name']===element)
      {
        final.push(foods);
      }
    }
    return final;
  }

}
