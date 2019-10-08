import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_QuantityComparatorEnum } from './R4_1_QuantityComparatorEnum'

export class R4_1_Quantity      extends R4_1_Element
{

   static def : string = 'Quantity';
   value : string ;
   comparator : R4_1_QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
