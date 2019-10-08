import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Consent_Verification      extends R4_1_BackboneElement
{

   static def : string = 'Consent_Verification';
   verified : boolean ;
   verifiedWith : R4_1_Reference ;
   verificationDate : string ;
}
