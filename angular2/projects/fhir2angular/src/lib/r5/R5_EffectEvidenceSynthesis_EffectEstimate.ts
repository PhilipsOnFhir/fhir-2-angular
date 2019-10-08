import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EffectEvidenceSynthesis_PrecisionEstimate } from './R5_EffectEvidenceSynthesis_PrecisionEstimate'

export class R5_EffectEvidenceSynthesis_EffectEstimate      extends R5_BackboneElement
{

   static def : string = 'EffectEvidenceSynthesis_EffectEstimate';
   description : string ;
   type : R5_CodeableConcept ;
   variantState : R5_CodeableConcept ;
   value : string ;
   unitOfMeasure : R5_CodeableConcept ;
   precisionEstimate : R5_EffectEvidenceSynthesis_PrecisionEstimate [];
}
