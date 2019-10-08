import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MeasureReport_Stratum } from './R4_MeasureReport_Stratum'

export class R4_MeasureReport_Stratifier      extends R4_BackboneElement
{

   static def : string = 'MeasureReport_Stratifier';
   code : R4_CodeableConcept [];
   stratum : R4_MeasureReport_Stratum [];
}
