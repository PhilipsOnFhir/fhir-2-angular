import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'

export class R4_1_DeviceRequest_Parameter      extends R4_1_BackboneElement
{

   static def : string = 'DeviceRequest_Parameter';
   code : R4_1_CodeableConcept ;
   valueCodeableConcept : R4_1_CodeableConcept ;
   valueQuantity : R4_1_Quantity ;
   valueRange : R4_1_Range ;
   valueBoolean : boolean ;
}
