import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Dosage } from './R4_Dosage'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicationDispense_Performer } from './R4_MedicationDispense_Performer'
import { R4_MedicationDispense_Substitution } from './R4_MedicationDispense_Substitution'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationDispense      extends R4_DomainResource
{

   static def : string = 'MedicationDispense';
   identifier : R4_Identifier [];
   partOf : R4_Reference [];
   status : string ;
   statusReasonCodeableConcept : R4_CodeableConcept ;
   statusReasonReference : R4_Reference ;
   category : R4_CodeableConcept ;
   medicationCodeableConcept : R4_CodeableConcept ;
   medicationReference : R4_Reference ;
   subject : R4_Reference ;
   context : R4_Reference ;
   supportingInformation : R4_Reference [];
   performer : R4_MedicationDispense_Performer [];
   location : R4_Reference ;
   authorizingPrescription : R4_Reference [];
   type : R4_CodeableConcept ;
   quantity : R4_Quantity ;
   daysSupply : R4_Quantity ;
   whenPrepared : string ;
   whenHandedOver : string ;
   destination : R4_Reference ;
   receiver : R4_Reference [];
   note : R4_Annotation [];
   dosageInstruction : R4_Dosage [];
   substitution : R4_MedicationDispense_Substitution ;
   detectedIssue : R4_Reference [];
   eventHistory : R4_Reference [];
}
