import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Range } from './R4_1_Range'

export class R4_1_RiskAssessment_Prediction      extends R4_1_BackboneElement
{

   static def : string = 'RiskAssessment_Prediction';
   outcome : R4_1_CodeableConcept ;
   probabilityDecimal : string ;
   probabilityRange : R4_1_Range ;
   qualitativeRisk : R4_1_CodeableConcept ;
   relativeRisk : string ;
   whenPeriod : R4_1_Period ;
   whenRange : R4_1_Range ;
   rationale : string ;
}
