import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filterName'
})
export class ConvertPipe implements PipeTransform{
    // transform(product: any, term:String): any{
    //     // console.log(term);
    //     // console.log(product);
    //     if(!term) return product;
    //     term=term.toLowerCase();
    //     return product.filter(it=>{
    //         return it.toLowerCase().includes(term);
    //     });
    // }

    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
          return it['name'].toLowerCase().includes(searchText);
        });
       }
}