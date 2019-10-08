import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Ratio } from './R4_1_Ratio'

export class R4_1_Goal_Target      extends R4_1_BackboneElement
{

   static def : string = 'Goal_Target';
   measure : R4_1_CodeableConcept ;
   detailQuantity : R4_1_Quantity ;
   detailRange : R4_1_Range ;
   detailCodeableConcept : R4_1_CodeableConcept ;
   detailString : string ;
   detailBoolean : boolean ;
   detailInteger : string ;
   detailRatio : R4_1_Ratio ;
   dueDate : string ;
   dueDuration : string ;
}
