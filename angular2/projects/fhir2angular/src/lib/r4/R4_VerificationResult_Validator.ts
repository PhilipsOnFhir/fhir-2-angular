import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_Signature } from './R4_Signature'

export class R4_VerificationResult_Validator      extends R4_BackboneElement
{

   static def : string = 'VerificationResult_Validator';
   organization : R4_Reference ;
   identityCertificate : string ;
   attestationSignature : R4_Signature ;
}
