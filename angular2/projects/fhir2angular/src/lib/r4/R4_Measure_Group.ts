import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Measure_Population } from './R4_Measure_Population'
import { R4_Measure_Stratifier } from './R4_Measure_Stratifier'

export class R4_Measure_Group      extends R4_BackboneElement
{

   static def : string = 'Measure_Group';
   code : R4_CodeableConcept ;
   description : string ;
   population : R4_Measure_Population [];
   stratifier : R4_Measure_Stratifier [];
}
