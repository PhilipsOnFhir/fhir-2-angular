import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FilterOperatorEnum } from './STU3_FilterOperatorEnum'

export class STU3_CodeSystem_Filter      extends STU3_BackboneElement
{

   static def : string = 'CodeSystem_Filter';
   code : string ;
   description : string ;
   operator : STU3_FilterOperatorEnum [];
   value : string ;
}
