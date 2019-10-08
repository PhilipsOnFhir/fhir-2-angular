import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Extension } from './DSTU2_Extension'
import { DSTU2_QuantityComparatorEnum } from './DSTU2_QuantityComparatorEnum'

export class DSTU2_Age{

   static def : string = 'Age';
   extension : DSTU2_Extension [];
   value : string ;
   comparator : DSTU2_QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
