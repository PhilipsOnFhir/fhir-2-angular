import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_VerificationResult_PrimarySource      extends R5_BackboneElement
{

   static def : string = 'VerificationResult_PrimarySource';
   who : R5_Reference ;
   type : R5_CodeableConcept [];
   communicationMethod : R5_CodeableConcept [];
   validationStatus : R5_CodeableConcept ;
   validationDate : string ;
   canPushUpdates : R5_CodeableConcept ;
   pushTypeAvailable : R5_CodeableConcept [];
}
