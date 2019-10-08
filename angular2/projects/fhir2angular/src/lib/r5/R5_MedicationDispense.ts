import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Dosage } from './R5_Dosage'
import { R5_Identifier } from './R5_Identifier'
import { R5_MedicationDispense_Performer } from './R5_MedicationDispense_Performer'
import { R5_MedicationDispense_Substitution } from './R5_MedicationDispense_Substitution'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_MedicationDispense      extends R5_DomainResource
{

   static def : string = 'MedicationDispense';
   identifier : R5_Identifier [];
   partOf : R5_Reference [];
   status : string ;
   statusReasonCodeableConcept : R5_CodeableConcept ;
   statusReasonReference : R5_Reference ;
   category : R5_CodeableConcept ;
   medicationCodeableConcept : R5_CodeableConcept ;
   medicationReference : R5_Reference ;
   subject : R5_Reference ;
   context : R5_Reference ;
   supportingInformation : R5_Reference [];
   performer : R5_MedicationDispense_Performer [];
   location : R5_Reference ;
   authorizingPrescription : R5_Reference [];
   type : R5_CodeableConcept ;
   quantity : R5_Quantity ;
   daysSupply : R5_Quantity ;
   whenPrepared : string ;
   whenHandedOver : string ;
   destination : R5_Reference ;
   receiver : R5_Reference [];
   note : R5_Annotation [];
   dosageInstruction : R5_Dosage [];
   substitution : R5_MedicationDispense_Substitution ;
   detectedIssue : R5_Reference [];
   eventHistory : R5_Reference [];
}
