import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MeasureReport_Population } from './R4_1_MeasureReport_Population'
import { R4_1_MeasureReport_Stratifier } from './R4_1_MeasureReport_Stratifier'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_MeasureReport_Group      extends R4_1_BackboneElement
{

   static def : string = 'MeasureReport_Group';
   code : R4_1_CodeableConcept ;
   population : R4_1_MeasureReport_Population [];
   measureScore : R4_1_Quantity ;
   stratifier : R4_1_MeasureReport_Stratifier [];
}
