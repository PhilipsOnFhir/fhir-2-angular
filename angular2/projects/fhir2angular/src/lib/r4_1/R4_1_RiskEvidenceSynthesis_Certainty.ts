import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_RiskEvidenceSynthesis_CertaintySubcomponent } from './R4_1_RiskEvidenceSynthesis_CertaintySubcomponent'

export class R4_1_RiskEvidenceSynthesis_Certainty      extends R4_1_BackboneElement
{

   static def : string = 'RiskEvidenceSynthesis_Certainty';
   rating : R4_1_CodeableConcept [];
   note : R4_1_Annotation [];
   certaintySubcomponent : R4_1_RiskEvidenceSynthesis_CertaintySubcomponent [];
}
