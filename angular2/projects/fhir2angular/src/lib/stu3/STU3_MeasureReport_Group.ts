import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MeasureReport_Population } from './STU3_MeasureReport_Population'
import { STU3_MeasureReport_Stratifier } from './STU3_MeasureReport_Stratifier'

export class STU3_MeasureReport_Group      extends STU3_BackboneElement
{

   static def : string = 'MeasureReport_Group';
   identifier : STU3_Identifier ;
   population : STU3_MeasureReport_Population [];
   measureScore : string ;
   stratifier : STU3_MeasureReport_Stratifier [];
}
