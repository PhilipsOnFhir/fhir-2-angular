import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FilterOperatorEnum } from './STU3_FilterOperatorEnum'

export class STU3_ValueSet_Filter      extends STU3_BackboneElement
{

   static def : string = 'ValueSet_Filter';
   property : string ;
   op : STU3_FilterOperatorEnum ;
   value : string ;
}
