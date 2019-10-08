import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Expression } from './R4_Expression'
import { R4_Measure_Component } from './R4_Measure_Component'

export class R4_Measure_Stratifier      extends R4_BackboneElement
{

   static def : string = 'Measure_Stratifier';
   code : R4_CodeableConcept ;
   description : string ;
   criteria : R4_Expression ;
   component : R4_Measure_Component [];
}
