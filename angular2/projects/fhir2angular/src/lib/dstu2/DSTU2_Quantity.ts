import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_QuantityComparatorEnum } from './DSTU2_QuantityComparatorEnum'

export class DSTU2_Quantity      extends DSTU2_Element
{

   static def : string = 'Quantity';
   value : string ;
   comparator : DSTU2_QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
