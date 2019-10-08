import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'
import { R5_Timing } from './R5_Timing'
import { R5_VerificationResult_Attestation } from './R5_VerificationResult_Attestation'
import { R5_VerificationResult_PrimarySource } from './R5_VerificationResult_PrimarySource'
import { R5_VerificationResult_Validator } from './R5_VerificationResult_Validator'

export class R5_VerificationResult      extends R5_DomainResource
{

   static def : string = 'VerificationResult';
   target : R5_Reference [];
   targetLocation : string [];
   need : R5_CodeableConcept ;
   status : string ;
   statusDate : string ;
   validationType : R5_CodeableConcept ;
   validationProcess : R5_CodeableConcept [];
   frequency : R5_Timing ;
   lastPerformed : string ;
   nextScheduled : string ;
   failureAction : R5_CodeableConcept ;
   primarySource : R5_VerificationResult_PrimarySource [];
   attestation : R5_VerificationResult_Attestation ;
   validator : R5_VerificationResult_Validator [];
}
