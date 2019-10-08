import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MeasureReport_Stratum } from './R5_MeasureReport_Stratum'

export class R5_MeasureReport_Stratifier      extends R5_BackboneElement
{

   static def : string = 'MeasureReport_Stratifier';
   code : R5_CodeableConcept [];
   stratum : R5_MeasureReport_Stratum [];
}
