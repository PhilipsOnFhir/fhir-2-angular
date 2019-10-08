import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EffectEvidenceSynthesis_PrecisionEstimate } from './R4_1_EffectEvidenceSynthesis_PrecisionEstimate'

export class R4_1_EffectEvidenceSynthesis_EffectEstimate      extends R4_1_BackboneElement
{

   static def : string = 'EffectEvidenceSynthesis_EffectEstimate';
   description : string ;
   type : R4_1_CodeableConcept ;
   variantState : R4_1_CodeableConcept ;
   value : string ;
   unitOfMeasure : R4_1_CodeableConcept ;
   precisionEstimate : R4_1_EffectEvidenceSynthesis_PrecisionEstimate [];
}
