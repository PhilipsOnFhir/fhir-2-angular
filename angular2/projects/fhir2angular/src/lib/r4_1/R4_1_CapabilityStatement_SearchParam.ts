import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SearchParamTypeEnum } from './R4_1_SearchParamTypeEnum'

export class R4_1_CapabilityStatement_SearchParam      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_SearchParam';
   name : string ;
   definition : string ;
   type : R4_1_SearchParamTypeEnum ;
   documentation : string ;
}
