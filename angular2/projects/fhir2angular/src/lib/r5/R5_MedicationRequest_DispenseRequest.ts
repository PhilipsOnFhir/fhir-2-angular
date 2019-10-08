import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicationRequest_InitialFill } from './R5_MedicationRequest_InitialFill'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_MedicationRequest_DispenseRequest      extends R5_BackboneElement
{

   static def : string = 'MedicationRequest_DispenseRequest';
   initialFill : R5_MedicationRequest_InitialFill ;
   dispenseInterval : string ;
   validityPeriod : R5_Period ;
   numberOfRepeatsAllowed : string ;
   quantity : R5_Quantity ;
   expectedSupplyDuration : string ;
   performer : R5_Reference ;
}
