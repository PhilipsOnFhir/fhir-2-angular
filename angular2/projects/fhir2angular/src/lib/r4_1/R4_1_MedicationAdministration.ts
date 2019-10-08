import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MedicationAdministration_Dosage } from './R4_1_MedicationAdministration_Dosage'
import { R4_1_MedicationAdministration_Performer } from './R4_1_MedicationAdministration_Performer'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicationAdministration      extends R4_1_DomainResource
{

   static def : string = 'MedicationAdministration';
   identifier : R4_1_Identifier [];
   instantiates : string [];
   partOf : R4_1_Reference [];
   status : string ;
   statusReason : R4_1_CodeableConcept [];
   category : R4_1_CodeableConcept ;
   medicationCodeableConcept : R4_1_CodeableConcept ;
   medicationReference : R4_1_Reference ;
   subject : R4_1_Reference ;
   context : R4_1_Reference ;
   supportingInformation : R4_1_Reference [];
   effectiveDateTime : string ;
   effectivePeriod : R4_1_Period ;
   performer : R4_1_MedicationAdministration_Performer [];
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   request : R4_1_Reference ;
   device : R4_1_Reference [];
   note : R4_1_Annotation [];
   dosage : R4_1_MedicationAdministration_Dosage ;
   eventHistory : R4_1_Reference [];
}
