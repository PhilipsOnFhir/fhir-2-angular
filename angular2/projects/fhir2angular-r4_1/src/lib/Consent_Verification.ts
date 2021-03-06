import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Consent_Verification      extends BackboneElement
{

   static def : string = 'Consent_Verification';
   verified : boolean ;
   verifiedWith : Reference ;
   verificationDate : string ;
}
