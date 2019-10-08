import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MedicationAdministration_Dosage } from './R5_MedicationAdministration_Dosage'
import { R5_MedicationAdministration_Performer } from './R5_MedicationAdministration_Performer'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_MedicationAdministration      extends R5_DomainResource
{

   static def : string = 'MedicationAdministration';
   identifier : R5_Identifier [];
   instantiates : string [];
   partOf : R5_Reference [];
   status : string ;
   statusReason : R5_CodeableConcept [];
   category : R5_CodeableConcept ;
   medicationCodeableConcept : R5_CodeableConcept ;
   medicationReference : R5_Reference ;
   subject : R5_Reference ;
   context : R5_Reference ;
   supportingInformation : R5_Reference [];
   effectiveDateTime : string ;
   effectivePeriod : R5_Period ;
   performer : R5_MedicationAdministration_Performer [];
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   request : R5_Reference ;
   device : R5_Reference [];
   note : R5_Annotation [];
   dosage : R5_MedicationAdministration_Dosage ;
   eventHistory : R5_Reference [];
}
