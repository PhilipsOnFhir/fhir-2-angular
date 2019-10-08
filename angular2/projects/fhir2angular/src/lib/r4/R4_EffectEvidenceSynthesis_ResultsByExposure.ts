import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExposureStateEnum } from './R4_ExposureStateEnum'
import { R4_Reference } from './R4_Reference'

export class R4_EffectEvidenceSynthesis_ResultsByExposure      extends R4_BackboneElement
{

   static def : string = 'EffectEvidenceSynthesis_ResultsByExposure';
   description : string ;
   exposureState : R4_ExposureStateEnum ;
   variantState : R4_CodeableConcept ;
   riskEvidenceSynthesis : R4_Reference ;
}
