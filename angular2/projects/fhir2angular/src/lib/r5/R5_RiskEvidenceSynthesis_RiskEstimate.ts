import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_RiskEvidenceSynthesis_PrecisionEstimate } from './R5_RiskEvidenceSynthesis_PrecisionEstimate'

export class R5_RiskEvidenceSynthesis_RiskEstimate      extends R5_BackboneElement
{

   static def : string = 'RiskEvidenceSynthesis_RiskEstimate';
   description : string ;
   type : R5_CodeableConcept ;
   value : string ;
   unitOfMeasure : R5_CodeableConcept ;
   denominatorCount : string ;
   numeratorCount : string ;
   precisionEstimate : R5_RiskEvidenceSynthesis_PrecisionEstimate [];
}
