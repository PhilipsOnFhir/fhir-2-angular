import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MeasureReport_Population } from './R4_MeasureReport_Population'
import { R4_MeasureReport_Stratifier } from './R4_MeasureReport_Stratifier'
import { R4_Quantity } from './R4_Quantity'

export class R4_MeasureReport_Group      extends R4_BackboneElement
{

   static def : string = 'MeasureReport_Group';
   code : R4_CodeableConcept ;
   population : R4_MeasureReport_Population [];
   measureScore : R4_Quantity ;
   stratifier : R4_MeasureReport_Stratifier [];
}
