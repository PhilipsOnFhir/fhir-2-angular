import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FilterOperatorEnum } from './R5_FilterOperatorEnum'

export class R5_CodeSystem_Filter      extends R5_BackboneElement
{

   static def : string = 'CodeSystem_Filter';
   code : string ;
   description : string ;
   operator : R5_FilterOperatorEnum [];
   value : string ;
}
