import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExposureStateEnum } from './R5_ExposureStateEnum'
import { R5_Reference } from './R5_Reference'

export class R5_EffectEvidenceSynthesis_ResultsByExposure      extends R5_BackboneElement
{

   static def : string = 'EffectEvidenceSynthesis_ResultsByExposure';
   description : string ;
   exposureState : R5_ExposureStateEnum ;
   variantState : R5_CodeableConcept ;
   riskEvidenceSynthesis : R5_Reference ;
}
