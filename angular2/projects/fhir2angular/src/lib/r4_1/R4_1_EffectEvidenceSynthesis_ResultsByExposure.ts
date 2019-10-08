import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ExposureStateEnum } from './R4_1_ExposureStateEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_EffectEvidenceSynthesis_ResultsByExposure      extends R4_1_BackboneElement
{

   static def : string = 'EffectEvidenceSynthesis_ResultsByExposure';
   description : string ;
   exposureState : R4_1_ExposureStateEnum ;
   variantState : R4_1_CodeableConcept ;
   riskEvidenceSynthesis : R4_1_Reference ;
}
