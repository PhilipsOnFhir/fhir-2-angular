import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'

export class R5_MedicationRequest_InitialFill      extends R5_BackboneElement
{

   static def : string = 'MedicationRequest_InitialFill';
   quantity : R5_Quantity ;
   duration : string ;
}
