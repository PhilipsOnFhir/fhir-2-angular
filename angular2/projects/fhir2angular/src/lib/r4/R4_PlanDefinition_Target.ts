import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'

export class R4_PlanDefinition_Target      extends R4_BackboneElement
{

   static def : string = 'PlanDefinition_Target';
   measure : R4_CodeableConcept ;
   detailQuantity : R4_Quantity ;
   detailRange : R4_Range ;
   detailCodeableConcept : R4_CodeableConcept ;
   due : string ;
}
