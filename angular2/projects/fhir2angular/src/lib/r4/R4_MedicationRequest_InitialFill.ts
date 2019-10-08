import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'

export class R4_MedicationRequest_InitialFill      extends R4_BackboneElement
{

   static def : string = 'MedicationRequest_InitialFill';
   quantity : R4_Quantity ;
   duration : string ;
}
