import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_RiskEvidenceSynthesis_PrecisionEstimate } from './R4_1_RiskEvidenceSynthesis_PrecisionEstimate'

export class R4_1_RiskEvidenceSynthesis_RiskEstimate      extends R4_1_BackboneElement
{

   static def : string = 'RiskEvidenceSynthesis_RiskEstimate';
   description : string ;
   type : R4_1_CodeableConcept ;
   value : string ;
   unitOfMeasure : R4_1_CodeableConcept ;
   denominatorCount : string ;
   numeratorCount : string ;
   precisionEstimate : R4_1_RiskEvidenceSynthesis_PrecisionEstimate [];
}
