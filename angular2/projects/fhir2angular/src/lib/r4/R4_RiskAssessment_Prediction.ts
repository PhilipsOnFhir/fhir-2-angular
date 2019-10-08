import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Range } from './R4_Range'

export class R4_RiskAssessment_Prediction      extends R4_BackboneElement
{

   static def : string = 'RiskAssessment_Prediction';
   outcome : R4_CodeableConcept ;
   probabilityDecimal : string ;
   probabilityRange : R4_Range ;
   qualitativeRisk : R4_CodeableConcept ;
   relativeRisk : string ;
   whenPeriod : R4_Period ;
   whenRange : R4_Range ;
   rationale : string ;
}
