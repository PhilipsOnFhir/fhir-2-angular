import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FilterOperatorEnum } from './R4_FilterOperatorEnum'

export class R4_ValueSet_Filter      extends R4_BackboneElement
{

   static def : string = 'ValueSet_Filter';
   property : string ;
   op : R4_FilterOperatorEnum ;
   value : string ;
}
