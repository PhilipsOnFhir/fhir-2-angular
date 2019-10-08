import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'

export class R5_SupplyRequest_Parameter      extends R5_BackboneElement
{

   static def : string = 'SupplyRequest_Parameter';
   code : R5_CodeableConcept ;
   valueCodeableConcept : R5_CodeableConcept ;
   valueQuantity : R5_Quantity ;
   valueRange : R5_Range ;
   valueBoolean : boolean ;
}
