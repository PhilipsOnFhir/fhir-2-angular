import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_Consent_Policy      extends R4_1_BackboneElement
{

   static def : string = 'Consent_Policy';
   authority : string ;
   uri : string ;
}
