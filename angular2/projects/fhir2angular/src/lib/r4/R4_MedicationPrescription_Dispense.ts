import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Duration } from './R4_Duration'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_SimpleQuantity } from './R4_SimpleQuantity'

export class R4_MedicationPrescription_Dispense      extends R4_BackboneElement
{

   static def : string = 'MedicationPrescription_Dispense';
   medicationCodeableConcept : R4_CodeableConcept ;
   medicationReference : R4_Reference ;
   validityPeriod : R4_Period ;
   numberOfRepeatsAllowed : string ;
   quantity : R4_SimpleQuantity ;
   expectedSupplyDuration : R4_Duration ;
}
