import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Measure_Population } from './STU3_Measure_Population'
import { STU3_Measure_Stratifier } from './STU3_Measure_Stratifier'

export class STU3_Measure_Group      extends STU3_BackboneElement
{

   static def : string = 'Measure_Group';
   identifier : STU3_Identifier ;
   name : string ;
   description : string ;
   population : STU3_Measure_Population [];
   stratifier : STU3_Measure_Stratifier [];
}
