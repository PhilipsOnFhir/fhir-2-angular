import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'

export class R5_DeviceDefinition_Property      extends R5_BackboneElement
{

   static def : string = 'DeviceDefinition_Property';
   type : R5_CodeableConcept ;
   valueQuantity : R5_Quantity [];
   valueCode : R5_CodeableConcept [];
}
