import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_QuantityComparatorEnum } from './STU3_QuantityComparatorEnum'

export class STU3_Quantity      extends STU3_Element
{

   static def : string = 'Quantity';
   value : string ;
   comparator : STU3_QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
