import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Timing } from './R4_1_Timing'
import { R4_1_VerificationResult_Attestation } from './R4_1_VerificationResult_Attestation'
import { R4_1_VerificationResult_PrimarySource } from './R4_1_VerificationResult_PrimarySource'
import { R4_1_VerificationResult_Validator } from './R4_1_VerificationResult_Validator'

export class R4_1_VerificationResult      extends R4_1_DomainResource
{

   static def : string = 'VerificationResult';
   target : R4_1_Reference [];
   targetLocation : string [];
   need : R4_1_CodeableConcept ;
   status : string ;
   statusDate : string ;
   validationType : R4_1_CodeableConcept ;
   validationProcess : R4_1_CodeableConcept [];
   frequency : R4_1_Timing ;
   lastPerformed : string ;
   nextScheduled : string ;
   failureAction : R4_1_CodeableConcept ;
   primarySource : R4_1_VerificationResult_PrimarySource [];
   attestation : R4_1_VerificationResult_Attestation ;
   validator : R4_1_VerificationResult_Validator [];
}
