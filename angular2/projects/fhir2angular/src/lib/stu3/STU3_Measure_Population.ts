import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'

export class STU3_Measure_Population      extends STU3_BackboneElement
{

   static def : string = 'Measure_Population';
   identifier : STU3_Identifier ;
   code : STU3_CodeableConcept ;
   name : string ;
   description : string ;
   criteria : string ;
}
