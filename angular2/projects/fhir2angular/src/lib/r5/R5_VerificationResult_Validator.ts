import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'
import { R5_Signature } from './R5_Signature'

export class R5_VerificationResult_Validator      extends R5_BackboneElement
{

   static def : string = 'VerificationResult_Validator';
   organization : R5_Reference ;
   identityCertificate : string ;
   attestationSignature : R5_Signature ;
}
