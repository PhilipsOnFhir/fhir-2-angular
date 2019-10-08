import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SearchParamTypeEnum } from './R4_SearchParamTypeEnum'

export class R4_CapabilityStatement_SearchParam      extends R4_BackboneElement
{

   static def : string = 'CapabilityStatement_SearchParam';
   name : string ;
   definition : string ;
   type : R4_SearchParamTypeEnum ;
   documentation : string ;
}
