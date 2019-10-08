import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'

export class STU3_Measure_SupplementalData      extends STU3_BackboneElement
{

   static def : string = 'Measure_SupplementalData';
   identifier : STU3_Identifier ;
   usage : STU3_CodeableConcept [];
   criteria : string ;
   path : string ;
}
