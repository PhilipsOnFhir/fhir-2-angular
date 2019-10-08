import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SearchModifierCodeEnum } from './R4_SearchModifierCodeEnum'

export class R4_Conformance_SearchParam      extends R4_BackboneElement
{

   static def : string = 'Conformance_SearchParam';
   name : string ;
   definition : string ;
   type : string ;
   documentation : string ;
   target : string [];
   modifier : R4_SearchModifierCodeEnum [];
   chain : string [];
}
