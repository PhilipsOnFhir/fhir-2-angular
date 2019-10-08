import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Duration } from './DSTU2_Duration'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_MedicationOrder_DispenseRequest      extends DSTU2_BackboneElement
{

   static def : string = 'MedicationOrder_DispenseRequest';
   medicationCodeableConcept : DSTU2_CodeableConcept ;
   medicationReference : DSTU2_Reference ;
   validityPeriod : DSTU2_Period ;
   numberOfRepeatsAllowed : string ;
   quantity : DSTU2_SimpleQuantity ;
   expectedSupplyDuration : DSTU2_Duration ;
}
