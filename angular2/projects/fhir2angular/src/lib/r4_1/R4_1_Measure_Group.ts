import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Measure_Population } from './R4_1_Measure_Population'
import { R4_1_Measure_Stratifier } from './R4_1_Measure_Stratifier'

export class R4_1_Measure_Group      extends R4_1_BackboneElement
{

   static def : string = 'Measure_Group';
   code : R4_1_CodeableConcept ;
   description : string ;
   population : R4_1_Measure_Population [];
   stratifier : R4_1_Measure_Stratifier [];
}
