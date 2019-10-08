import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'

export class STU3_PlanDefinition_Target      extends STU3_BackboneElement
{

   static def : string = 'PlanDefinition_Target';
   measure : STU3_CodeableConcept ;
   detailQuantity : STU3_Quantity ;
   detailRange : STU3_Range ;
   detailCodeableConcept : STU3_CodeableConcept ;
   due : string ;
}
