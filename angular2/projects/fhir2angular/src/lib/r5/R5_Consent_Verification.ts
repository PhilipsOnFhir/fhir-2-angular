import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Consent_Verification      extends R5_BackboneElement
{

   static def : string = 'Consent_Verification';
   verified : boolean ;
   verifiedWith : R5_Reference ;
   verificationDate : string ;
}
