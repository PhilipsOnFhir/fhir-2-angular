import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Consent_Policy      extends R4_BackboneElement
{

   static def : string = 'Consent_Policy';
   authority : string ;
   uri : string ;
}
