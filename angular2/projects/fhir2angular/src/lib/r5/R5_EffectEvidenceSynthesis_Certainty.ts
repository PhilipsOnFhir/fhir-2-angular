import { R5_Annotation } from './R5_Annotation'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EffectEvidenceSynthesis_CertaintySubcomponent } from './R5_EffectEvidenceSynthesis_CertaintySubcomponent'

export class R5_EffectEvidenceSynthesis_Certainty      extends R5_BackboneElement
{

   static def : string = 'EffectEvidenceSynthesis_Certainty';
   rating : R5_CodeableConcept [];
   note : R5_Annotation [];
   certaintySubcomponent : R5_EffectEvidenceSynthesis_CertaintySubcomponent [];
}
