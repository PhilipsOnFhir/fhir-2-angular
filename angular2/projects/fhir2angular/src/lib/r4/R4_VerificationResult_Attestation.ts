import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_Signature } from './R4_Signature'

export class R4_VerificationResult_Attestation      extends R4_BackboneElement
{

   static def : string = 'VerificationResult_Attestation';
   who : R4_Reference ;
   onBehalfOf : R4_Reference ;
   communicationMethod : R4_CodeableConcept ;
   date : string ;
   sourceIdentityCertificate : string ;
   proxyIdentityCertificate : string ;
   proxySignature : R4_Signature ;
   sourceSignature : R4_Signature ;
}
