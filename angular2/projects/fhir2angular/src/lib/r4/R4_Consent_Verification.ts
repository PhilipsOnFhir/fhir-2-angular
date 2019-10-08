import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Consent_Verification      extends R4_BackboneElement
{

   static def : string = 'Consent_Verification';
   verified : boolean ;
   verifiedWith : R4_Reference ;
   verificationDate : string ;
}
