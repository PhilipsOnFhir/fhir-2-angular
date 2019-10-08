import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'
import { R5_Signature } from './R5_Signature'

export class R5_VerificationResult_Attestation      extends R5_BackboneElement
{

   static def : string = 'VerificationResult_Attestation';
   who : R5_Reference ;
   onBehalfOf : R5_Reference ;
   communicationMethod : R5_CodeableConcept ;
   date : string ;
   sourceIdentityCertificate : string ;
   proxyIdentityCertificate : string ;
   proxySignature : R5_Signature ;
   sourceSignature : R5_Signature ;
}
