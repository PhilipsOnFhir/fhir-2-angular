import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Range } from './STU3_Range'

export class STU3_RiskAssessment_Prediction      extends STU3_BackboneElement
{

   static def : string = 'RiskAssessment_Prediction';
   outcome : STU3_CodeableConcept ;
   probabilityDecimal : string ;
   probabilityRange : STU3_Range ;
   qualitativeRisk : STU3_CodeableConcept ;
   relativeRisk : string ;
   whenPeriod : STU3_Period ;
   whenRange : STU3_Range ;
   rationale : string ;
}
