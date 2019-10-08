import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Measure_Population } from './R5_Measure_Population'
import { R5_Measure_Stratifier } from './R5_Measure_Stratifier'

export class R5_Measure_Group      extends R5_BackboneElement
{

   static def : string = 'Measure_Group';
   code : R5_CodeableConcept ;
   description : string ;
   population : R5_Measure_Population [];
   stratifier : R5_Measure_Stratifier [];
}
