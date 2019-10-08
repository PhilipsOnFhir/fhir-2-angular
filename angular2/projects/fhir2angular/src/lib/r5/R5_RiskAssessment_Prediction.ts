import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Range } from './R5_Range'

export class R5_RiskAssessment_Prediction      extends R5_BackboneElement
{

   static def : string = 'RiskAssessment_Prediction';
   outcome : R5_CodeableConcept ;
   probabilityDecimal : string ;
   probabilityRange : R5_Range ;
   qualitativeRisk : R5_CodeableConcept ;
   relativeRisk : string ;
   whenPeriod : R5_Period ;
   whenRange : R5_Range ;
   rationale : string ;
}
