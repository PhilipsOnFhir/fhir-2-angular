import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MedicationAdministrationStatusEnum } from './STU3_MedicationAdministrationStatusEnum'
import { STU3_MedicationAdministration_Dosage } from './STU3_MedicationAdministration_Dosage'
import { STU3_MedicationAdministration_Performer } from './STU3_MedicationAdministration_Performer'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MedicationAdministration      extends STU3_DomainResource
{

   static def : string = 'MedicationAdministration';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   partOf : STU3_Reference [];
   status : STU3_MedicationAdministrationStatusEnum ;
   category : STU3_CodeableConcept ;
   medicationCodeableConcept : STU3_CodeableConcept ;
   medicationReference : STU3_Reference ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   supportingInformation : STU3_Reference [];
   effectiveDateTime : string ;
   effectivePeriod : STU3_Period ;
   performer : STU3_MedicationAdministration_Performer [];
   notGiven : boolean ;
   reasonNotGiven : STU3_CodeableConcept [];
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   prescription : STU3_Reference ;
   device : STU3_Reference [];
   note : STU3_Annotation [];
   dosage : STU3_MedicationAdministration_Dosage ;
   eventHistory : STU3_Reference [];
}
