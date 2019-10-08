import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Expression } from './R4_Expression'

export class R4_Measure_Component      extends R4_BackboneElement
{

   static def : string = 'Measure_Component';
   code : R4_CodeableConcept ;
   description : string ;
   criteria : R4_Expression ;
}
