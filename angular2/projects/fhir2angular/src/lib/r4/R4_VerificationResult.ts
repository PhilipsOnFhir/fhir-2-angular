import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_Timing } from './R4_Timing'
import { R4_VerificationResult_Attestation } from './R4_VerificationResult_Attestation'
import { R4_VerificationResult_PrimarySource } from './R4_VerificationResult_PrimarySource'
import { R4_VerificationResult_Validator } from './R4_VerificationResult_Validator'

export class R4_VerificationResult      extends R4_DomainResource
{

   static def : string = 'VerificationResult';
   target : R4_Reference [];
   targetLocation : string [];
   need : R4_CodeableConcept ;
   status : string ;
   statusDate : string ;
   validationType : R4_CodeableConcept ;
   validationProcess : R4_CodeableConcept [];
   frequency : R4_Timing ;
   lastPerformed : string ;
   nextScheduled : string ;
   failureAction : R4_CodeableConcept ;
   primarySource : R4_VerificationResult_PrimarySource [];
   attestation : R4_VerificationResult_Attestation ;
   validator : R4_VerificationResult_Validator [];
}
