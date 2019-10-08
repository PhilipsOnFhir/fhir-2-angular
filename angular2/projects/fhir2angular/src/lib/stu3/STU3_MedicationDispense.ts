import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Dosage } from './STU3_Dosage'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MedicationDispenseStatusEnum } from './STU3_MedicationDispenseStatusEnum'
import { STU3_MedicationDispense_Performer } from './STU3_MedicationDispense_Performer'
import { STU3_MedicationDispense_Substitution } from './STU3_MedicationDispense_Substitution'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MedicationDispense      extends STU3_DomainResource
{

   static def : string = 'MedicationDispense';
   identifier : STU3_Identifier [];
   partOf : STU3_Reference [];
   status : STU3_MedicationDispenseStatusEnum ;
   category : STU3_CodeableConcept ;
   medicationCodeableConcept : STU3_CodeableConcept ;
   medicationReference : STU3_Reference ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   supportingInformation : STU3_Reference [];
   performer : STU3_MedicationDispense_Performer [];
   authorizingPrescription : STU3_Reference [];
   type : STU3_CodeableConcept ;
   quantity : STU3_Quantity ;
   daysSupply : STU3_Quantity ;
   whenPrepared : string ;
   whenHandedOver : string ;
   destination : STU3_Reference ;
   receiver : STU3_Reference [];
   note : STU3_Annotation [];
   dosageInstruction : STU3_Dosage [];
   substitution : STU3_MedicationDispense_Substitution ;
   detectedIssue : STU3_Reference [];
   notDone : boolean ;
   notDoneReasonCodeableConcept : STU3_CodeableConcept ;
   notDoneReasonReference : STU3_Reference ;
   eventHistory : STU3_Reference [];
}
