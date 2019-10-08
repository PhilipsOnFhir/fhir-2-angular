import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Expression } from './R4_1_Expression'
import { R4_1_Measure_Component } from './R4_1_Measure_Component'

export class R4_1_Measure_Stratifier      extends R4_1_BackboneElement
{

   static def : string = 'Measure_Stratifier';
   code : R4_1_CodeableConcept ;
   description : string ;
   criteria : R4_1_Expression ;
   component : R4_1_Measure_Component [];
}
