import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EffectEvidenceSynthesis_PrecisionEstimate } from './R4_EffectEvidenceSynthesis_PrecisionEstimate'

export class R4_EffectEvidenceSynthesis_EffectEstimate      extends R4_BackboneElement
{

   static def : string = 'EffectEvidenceSynthesis_EffectEstimate';
   description : string ;
   type : R4_CodeableConcept ;
   variantState : R4_CodeableConcept ;
   value : string ;
   unitOfMeasure : R4_CodeableConcept ;
   precisionEstimate : R4_EffectEvidenceSynthesis_PrecisionEstimate [];
}
