import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_Device_Property      extends R4_1_BackboneElement
{

   static def : string = 'Device_Property';
   type : R4_1_CodeableConcept ;
   valueQuantity : R4_1_Quantity [];
   valueCode : R4_1_CodeableConcept [];
}
