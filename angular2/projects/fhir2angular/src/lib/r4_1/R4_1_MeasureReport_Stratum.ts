import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MeasureReport_Component } from './R4_1_MeasureReport_Component'
import { R4_1_MeasureReport_Population1 } from './R4_1_MeasureReport_Population1'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_MeasureReport_Stratum      extends R4_1_BackboneElement
{

   static def : string = 'MeasureReport_Stratum';
   value : R4_1_CodeableConcept ;
   component : R4_1_MeasureReport_Component [];
   population : R4_1_MeasureReport_Population1 [];
   measureScore : R4_1_Quantity ;
}
