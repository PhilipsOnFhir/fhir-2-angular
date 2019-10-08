import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_SearchModifierCodeEnum } from './STU3_SearchModifierCodeEnum'
import { STU3_SearchParamTypeEnum } from './STU3_SearchParamTypeEnum'

export class STU3_Conformance_SearchParam      extends STU3_BackboneElement
{

   static def : string = 'Conformance_SearchParam';
   name : string ;
   definition : string ;
   type : STU3_SearchParamTypeEnum ;
   documentation : string ;
   target : string [];
   modifier : STU3_SearchModifierCodeEnum [];
   chain : string [];
}
