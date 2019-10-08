import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MeasureReport_Stratum } from './R4_1_MeasureReport_Stratum'

export class R4_1_MeasureReport_Stratifier      extends R4_1_BackboneElement
{

   static def : string = 'MeasureReport_Stratifier';
   code : R4_1_CodeableConcept [];
   stratum : R4_1_MeasureReport_Stratum [];
}
