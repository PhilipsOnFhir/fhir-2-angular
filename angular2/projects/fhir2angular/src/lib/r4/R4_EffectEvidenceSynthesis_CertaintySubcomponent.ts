import { R4_Annotation } from './R4_Annotation'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_EffectEvidenceSynthesis_CertaintySubcomponent      extends R4_BackboneElement
{

   static def : string = 'EffectEvidenceSynthesis_CertaintySubcomponent';
   type : R4_CodeableConcept ;
   rating : R4_CodeableConcept [];
   note : R4_Annotation [];
}
