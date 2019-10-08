import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FilterOperatorEnum } from './R4_FilterOperatorEnum'

export class R4_CodeSystem_Filter      extends R4_BackboneElement
{

   static def : string = 'CodeSystem_Filter';
   code : string ;
   description : string ;
   operator : R4_FilterOperatorEnum [];
   value : string ;
}
