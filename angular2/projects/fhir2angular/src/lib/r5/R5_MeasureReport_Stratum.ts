import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MeasureReport_Component } from './R5_MeasureReport_Component'
import { R5_MeasureReport_Population1 } from './R5_MeasureReport_Population1'
import { R5_Quantity } from './R5_Quantity'

export class R5_MeasureReport_Stratum      extends R5_BackboneElement
{

   static def : string = 'MeasureReport_Stratum';
   value : R5_CodeableConcept ;
   component : R5_MeasureReport_Component [];
   population : R5_MeasureReport_Population1 [];
   measureScore : R5_Quantity ;
}
