import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_EffectEvidenceSynthesis_PrecisionEstimate      extends R5_BackboneElement
{

   static def : string = 'EffectEvidenceSynthesis_PrecisionEstimate';
   type : R5_CodeableConcept ;
   level : string ;
   from : string ;
   to : string ;
}
