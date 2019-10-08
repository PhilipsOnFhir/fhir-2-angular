import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_QuantityComparatorEnum } from './R4_QuantityComparatorEnum'

export class R4_Quantity      extends R4_Element
{

   static def : string = 'Quantity';
   value : string ;
   comparator : R4_QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
