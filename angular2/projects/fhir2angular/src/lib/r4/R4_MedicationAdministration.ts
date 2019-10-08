import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicationAdministration_Dosage } from './R4_MedicationAdministration_Dosage'
import { R4_MedicationAdministration_Performer } from './R4_MedicationAdministration_Performer'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationAdministration      extends R4_DomainResource
{

   static def : string = 'MedicationAdministration';
   identifier : R4_Identifier [];
   instantiates : string [];
   partOf : R4_Reference [];
   status : string ;
   statusReason : R4_CodeableConcept [];
   category : R4_CodeableConcept ;
   medicationCodeableConcept : R4_CodeableConcept ;
   medicationReference : R4_Reference ;
   subject : R4_Reference ;
   context : R4_Reference ;
   supportingInformation : R4_Reference [];
   effectiveDateTime : string ;
   effectivePeriod : R4_Period ;
   performer : R4_MedicationAdministration_Performer [];
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   request : R4_Reference ;
   device : R4_Reference [];
   note : R4_Annotation [];
   dosage : R4_MedicationAdministration_Dosage ;
   eventHistory : R4_Reference [];
}
