import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_MedicationRequest_InitialFill      extends R4_1_BackboneElement
{

   static def : string = 'MedicationRequest_InitialFill';
   quantity : R4_1_Quantity ;
   duration : string ;
}
