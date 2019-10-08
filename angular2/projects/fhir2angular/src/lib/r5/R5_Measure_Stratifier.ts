import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Expression } from './R5_Expression'
import { R5_Measure_Component } from './R5_Measure_Component'

export class R5_Measure_Stratifier      extends R5_BackboneElement
{

   static def : string = 'Measure_Stratifier';
   code : R5_CodeableConcept ;
   description : string ;
   criteria : R5_Expression ;
   component : R5_Measure_Component [];
}
