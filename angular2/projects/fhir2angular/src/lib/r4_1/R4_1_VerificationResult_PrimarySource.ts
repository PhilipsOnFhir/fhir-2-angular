import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_VerificationResult_PrimarySource      extends R4_1_BackboneElement
{

   static def : string = 'VerificationResult_PrimarySource';
   who : R4_1_Reference ;
   type : R4_1_CodeableConcept [];
   communicationMethod : R4_1_CodeableConcept [];
   validationStatus : R4_1_CodeableConcept ;
   validationDate : string ;
   canPushUpdates : R4_1_CodeableConcept ;
   pushTypeAvailable : R4_1_CodeableConcept [];
}
