import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SearchParamTypeEnum } from './R5_SearchParamTypeEnum'

export class R5_CapabilityStatement_SearchParam      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_SearchParam';
   name : string ;
   definition : string ;
   type : R5_SearchParamTypeEnum ;
   documentation : string ;
}
