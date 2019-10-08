import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'

export class STU3_Measure_Stratifier      extends STU3_BackboneElement
{

   static def : string = 'Measure_Stratifier';
   identifier : STU3_Identifier ;
   criteria : string ;
   path : string ;
}
