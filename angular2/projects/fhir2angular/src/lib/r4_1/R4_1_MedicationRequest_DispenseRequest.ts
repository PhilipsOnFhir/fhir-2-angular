import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicationRequest_InitialFill } from './R4_1_MedicationRequest_InitialFill'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicationRequest_DispenseRequest      extends R4_1_BackboneElement
{

   static def : string = 'MedicationRequest_DispenseRequest';
   initialFill : R4_1_MedicationRequest_InitialFill ;
   dispenseInterval : string ;
   validityPeriod : R4_1_Period ;
   numberOfRepeatsAllowed : string ;
   quantity : R4_1_Quantity ;
   expectedSupplyDuration : string ;
   performer : R4_1_Reference ;
}
