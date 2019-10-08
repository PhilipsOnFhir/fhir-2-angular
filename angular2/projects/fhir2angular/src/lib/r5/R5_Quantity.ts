import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_QuantityComparatorEnum } from './R5_QuantityComparatorEnum'

export class R5_Quantity      extends R5_Element
{

   static def : string = 'Quantity';
   value : string ;
   comparator : R5_QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
