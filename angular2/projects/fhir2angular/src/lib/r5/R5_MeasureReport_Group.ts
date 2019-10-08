import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MeasureReport_Population } from './R5_MeasureReport_Population'
import { R5_MeasureReport_Stratifier } from './R5_MeasureReport_Stratifier'
import { R5_Quantity } from './R5_Quantity'

export class R5_MeasureReport_Group      extends R5_BackboneElement
{

   static def : string = 'MeasureReport_Group';
   code : R5_CodeableConcept ;
   population : R5_MeasureReport_Population [];
   measureScore : R5_Quantity ;
   stratifier : R5_MeasureReport_Stratifier [];
}
