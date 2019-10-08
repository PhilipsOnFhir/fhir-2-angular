import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_FilterOperatorEnum } from './DSTU2_FilterOperatorEnum'

export class DSTU2_ValueSet_Filter      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_Filter';
   property : string ;
   op : DSTU2_FilterOperatorEnum ;
   value : string ;
}
