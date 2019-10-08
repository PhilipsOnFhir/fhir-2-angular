import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MedicationRequest_DispenseRequest      extends STU3_BackboneElement
{

   static def : string = 'MedicationRequest_DispenseRequest';
   validityPeriod : STU3_Period ;
   numberOfRepeatsAllowed : string ;
   quantity : STU3_Quantity ;
   expectedSupplyDuration : string ;
   performer : STU3_Reference ;
}
