import { R4_Annotation } from './R4_Annotation'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_RiskEvidenceSynthesis_CertaintySubcomponent } from './R4_RiskEvidenceSynthesis_CertaintySubcomponent'

export class R4_RiskEvidenceSynthesis_Certainty      extends R4_BackboneElement
{

   static def : string = 'RiskEvidenceSynthesis_Certainty';
   rating : R4_CodeableConcept [];
   note : R4_Annotation [];
   certaintySubcomponent : R4_RiskEvidenceSynthesis_CertaintySubcomponent [];
}
