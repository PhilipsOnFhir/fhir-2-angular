import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MeasureReport_Component } from './R4_MeasureReport_Component'
import { R4_MeasureReport_Population1 } from './R4_MeasureReport_Population1'
import { R4_Quantity } from './R4_Quantity'

export class R4_MeasureReport_Stratum      extends R4_BackboneElement
{

   static def : string = 'MeasureReport_Stratum';
   value : R4_CodeableConcept ;
   component : R4_MeasureReport_Component [];
   population : R4_MeasureReport_Population1 [];
   measureScore : R4_Quantity ;
}
