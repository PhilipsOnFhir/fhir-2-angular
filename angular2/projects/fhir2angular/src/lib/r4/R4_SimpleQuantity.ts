import { R4_DomainResource } from './R4_DomainResource'
import { R4_Extension } from './R4_Extension'
import { R4_QuantityComparatorEnum } from './R4_QuantityComparatorEnum'

export class R4_SimpleQuantity{

   static def : string = 'SimpleQuantity';
   extension : R4_Extension [];
   value : string ;
   comparator : R4_QuantityComparatorEnum [];
   unit : string ;
   system : string ;
   code : string ;
}
