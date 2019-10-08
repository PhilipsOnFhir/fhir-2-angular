import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Signature } from './R4_1_Signature'

export class R4_1_VerificationResult_Validator      extends R4_1_BackboneElement
{

   static def : string = 'VerificationResult_Validator';
   organization : R4_1_Reference ;
   identityCertificate : string ;
   attestationSignature : R4_1_Signature ;
}
