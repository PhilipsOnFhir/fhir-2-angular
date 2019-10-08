import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Expression } from './R4_1_Expression'

export class R4_1_Measure_Component      extends R4_1_BackboneElement
{

   static def : string = 'Measure_Component';
   code : R4_1_CodeableConcept ;
   description : string ;
   criteria : R4_1_Expression ;
}
