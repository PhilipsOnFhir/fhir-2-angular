import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_VerificationResult_PrimarySource      extends R4_BackboneElement
{

   static def : string = 'VerificationResult_PrimarySource';
   who : R4_Reference ;
   type : R4_CodeableConcept [];
   communicationMethod : R4_CodeableConcept [];
   validationStatus : R4_CodeableConcept ;
   validationDate : string ;
   canPushUpdates : R4_CodeableConcept ;
   pushTypeAvailable : R4_CodeableConcept [];
}
