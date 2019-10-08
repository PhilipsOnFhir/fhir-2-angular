import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'

export class R4_SupplyRequest_Parameter      extends R4_BackboneElement
{

   static def : string = 'SupplyRequest_Parameter';
   code : R4_CodeableConcept ;
   valueCodeableConcept : R4_CodeableConcept ;
   valueQuantity : R4_Quantity ;
   valueRange : R4_Range ;
   valueBoolean : boolean ;
}
