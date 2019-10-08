import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MedicationPrescription_Dispense      extends STU3_BackboneElement
{

   static def : string = 'MedicationPrescription_Dispense';
   medicationCodeableConcept : STU3_CodeableConcept ;
   medicationReference : STU3_Reference ;
   validityPeriod : STU3_Period ;
   numberOfRepeatsAllowed : string ;
   quantity : string ;
   expectedSupplyDuration : string ;
}
