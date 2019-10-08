import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicationRequest_InitialFill } from './R4_MedicationRequest_InitialFill'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationRequest_DispenseRequest      extends R4_BackboneElement
{

   static def : string = 'MedicationRequest_DispenseRequest';
   initialFill : R4_MedicationRequest_InitialFill ;
   dispenseInterval : string ;
   validityPeriod : R4_Period ;
   numberOfRepeatsAllowed : string ;
   quantity : R4_Quantity ;
   expectedSupplyDuration : string ;
   performer : R4_Reference ;
}
