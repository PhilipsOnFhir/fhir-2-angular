import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_SearchModifierCodeEnum } from './DSTU2_SearchModifierCodeEnum'

export class DSTU2_Conformance_SearchParam      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_SearchParam';
   name : string ;
   definition : string ;
   type : string ;
   documentation : string ;
   target : string [];
   modifier : DSTU2_SearchModifierCodeEnum [];
   chain : string [];
}
