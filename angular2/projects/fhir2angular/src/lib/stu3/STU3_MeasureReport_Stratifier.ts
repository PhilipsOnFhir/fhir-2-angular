import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MeasureReport_Stratum } from './STU3_MeasureReport_Stratum'

export class STU3_MeasureReport_Stratifier      extends STU3_BackboneElement
{

   static def : string = 'MeasureReport_Stratifier';
   identifier : STU3_Identifier ;
   stratum : STU3_MeasureReport_Stratum [];
}
