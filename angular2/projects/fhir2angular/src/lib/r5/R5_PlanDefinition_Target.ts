import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'

export class R5_PlanDefinition_Target      extends R5_BackboneElement
{

   static def : string = 'PlanDefinition_Target';
   measure : R5_CodeableConcept ;
   detailQuantity : R5_Quantity ;
   detailRange : R5_Range ;
   detailCodeableConcept : R5_CodeableConcept ;
   due : string ;
}
