import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Consent_Policy      extends R5_BackboneElement
{

   static def : string = 'Consent_Policy';
   authority : string ;
   uri : string ;
}
