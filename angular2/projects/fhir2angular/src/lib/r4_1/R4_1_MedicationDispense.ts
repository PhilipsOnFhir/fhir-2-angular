import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Dosage } from './R4_1_Dosage'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MedicationDispense_Performer } from './R4_1_MedicationDispense_Performer'
import { R4_1_MedicationDispense_Substitution } from './R4_1_MedicationDispense_Substitution'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicationDispense      extends R4_1_DomainResource
{

   static def : string = 'MedicationDispense';
   identifier : R4_1_Identifier [];
   partOf : R4_1_Reference [];
   status : string ;
   statusReasonCodeableConcept : R4_1_CodeableConcept ;
   statusReasonReference : R4_1_Reference ;
   category : R4_1_CodeableConcept ;
   medicationCodeableConcept : R4_1_CodeableConcept ;
   medicationReference : R4_1_Reference ;
   subject : R4_1_Reference ;
   context : R4_1_Reference ;
   supportingInformation : R4_1_Reference [];
   performer : R4_1_MedicationDispense_Performer [];
   location : R4_1_Reference ;
   authorizingPrescription : R4_1_Reference [];
   type : R4_1_CodeableConcept ;
   quantity : R4_1_Quantity ;
   daysSupply : R4_1_Quantity ;
   whenPrepared : string ;
   whenHandedOver : string ;
   destination : R4_1_Reference ;
   receiver : R4_1_Reference [];
   note : R4_1_Annotation [];
   dosageInstruction : R4_1_Dosage [];
   substitution : R4_1_MedicationDispense_Substitution ;
   detectedIssue : R4_1_Reference [];
   eventHistory : R4_1_Reference [];
}
