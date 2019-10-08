import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FilterOperatorEnum } from './R4_1_FilterOperatorEnum'

export class R4_1_ValueSet_Filter      extends R4_1_BackboneElement
{

   static def : string = 'ValueSet_Filter';
   property : string ;
   op : R4_1_FilterOperatorEnum ;
   value : string ;
}
