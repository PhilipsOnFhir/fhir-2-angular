import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Signature } from './R4_1_Signature'

export class R4_1_VerificationResult_Attestation      extends R4_1_BackboneElement
{

   static def : string = 'VerificationResult_Attestation';
   who : R4_1_Reference ;
   onBehalfOf : R4_1_Reference ;
   communicationMethod : R4_1_CodeableConcept ;
   date : string ;
   sourceIdentityCertificate : string ;
   proxyIdentityCertificate : string ;
   proxySignature : R4_1_Signature ;
   sourceSignature : R4_1_Signature ;
}
