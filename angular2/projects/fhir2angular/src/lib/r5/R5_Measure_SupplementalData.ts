import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Expression } from './R5_Expression'

export class R5_Measure_SupplementalData      extends R5_BackboneElement
{

   static def : string = 'Measure_SupplementalData';
   code : R5_CodeableConcept ;
   usage : R5_CodeableConcept [];
   description : string ;
   criteria : R5_Expression ;
}
