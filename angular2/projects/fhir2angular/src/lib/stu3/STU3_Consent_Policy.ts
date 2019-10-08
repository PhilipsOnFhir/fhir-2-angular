import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Consent_Policy      extends STU3_BackboneElement
{

   static def : string = 'Consent_Policy';
   authority : string ;
   uri : string ;
}
