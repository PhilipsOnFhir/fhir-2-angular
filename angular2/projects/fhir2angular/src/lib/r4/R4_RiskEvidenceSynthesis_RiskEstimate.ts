import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_RiskEvidenceSynthesis_PrecisionEstimate } from './R4_RiskEvidenceSynthesis_PrecisionEstimate'

export class R4_RiskEvidenceSynthesis_RiskEstimate      extends R4_BackboneElement
{

   static def : string = 'RiskEvidenceSynthesis_RiskEstimate';
   description : string ;
   type : R4_CodeableConcept ;
   value : string ;
   unitOfMeasure : R4_CodeableConcept ;
   denominatorCount : string ;
   numeratorCount : string ;
   precisionEstimate : R4_RiskEvidenceSynthesis_PrecisionEstimate [];
}
