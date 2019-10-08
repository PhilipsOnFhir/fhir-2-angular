import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'

export class R4_1_PlanDefinition_Target      extends R4_1_BackboneElement
{

   static def : string = 'PlanDefinition_Target';
   measure : R4_1_CodeableConcept ;
   detailQuantity : R4_1_Quantity ;
   detailRange : R4_1_Range ;
   detailCodeableConcept : R4_1_CodeableConcept ;
   due : string ;
}
