import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Range } from './DSTU2_Range'

export class DSTU2_RiskAssessment_Prediction      extends DSTU2_BackboneElement
{

   static def : string = 'RiskAssessment_Prediction';
   outcome : DSTU2_CodeableConcept ;
   probabilityDecimal : string ;
   probabilityRange : DSTU2_Range ;
   probabilityCodeableConcept : DSTU2_CodeableConcept ;
   relativeRisk : string ;
   whenPeriod : DSTU2_Period ;
   whenRange : DSTU2_Range ;
   rationale : string ;
}
