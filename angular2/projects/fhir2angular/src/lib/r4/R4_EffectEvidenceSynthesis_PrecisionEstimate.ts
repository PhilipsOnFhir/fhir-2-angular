import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_EffectEvidenceSynthesis_PrecisionEstimate      extends R4_BackboneElement
{

   static def : string = 'EffectEvidenceSynthesis_PrecisionEstimate';
   type : R4_CodeableConcept ;
   level : string ;
   from : string ;
   to : string ;
}
