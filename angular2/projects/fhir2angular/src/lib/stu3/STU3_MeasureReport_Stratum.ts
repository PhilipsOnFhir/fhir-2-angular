import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_MeasureReport_Population1 } from './STU3_MeasureReport_Population1'

export class STU3_MeasureReport_Stratum      extends STU3_BackboneElement
{

   static def : string = 'MeasureReport_Stratum';
   value : string ;
   population : STU3_MeasureReport_Population1 [];
   measureScore : string ;
}
