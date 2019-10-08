import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_MedicationAdministrationStatusEnum } from './DSTU2_MedicationAdministrationStatusEnum'
import { DSTU2_MedicationAdministration_Dosage } from './DSTU2_MedicationAdministration_Dosage'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_MedicationAdministration      extends DSTU2_DomainResource
{

   static def : string = 'MedicationAdministration';
   identifier : DSTU2_Identifier [];
   status : DSTU2_MedicationAdministrationStatusEnum ;
   patient : DSTU2_Reference ;
   practitioner : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   prescription : DSTU2_Reference ;
   wasNotGiven : boolean ;
   reasonNotGiven : DSTU2_CodeableConcept [];
   reasonGiven : DSTU2_CodeableConcept [];
   effectiveTimeDateTime : string ;
   effectiveTimePeriod : DSTU2_Period ;
   medicationCodeableConcept : DSTU2_CodeableConcept ;
   medicationReference : DSTU2_Reference ;
   device : DSTU2_Reference [];
   note : string ;
   dosage : DSTU2_MedicationAdministration_Dosage ;
}
