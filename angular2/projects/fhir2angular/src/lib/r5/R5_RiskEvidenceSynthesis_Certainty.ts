import { R5_Annotation } from './R5_Annotation'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_RiskEvidenceSynthesis_CertaintySubcomponent } from './R5_RiskEvidenceSynthesis_CertaintySubcomponent'

export class R5_RiskEvidenceSynthesis_Certainty      extends R5_BackboneElement
{

   static def : string = 'RiskEvidenceSynthesis_Certainty';
   rating : R5_CodeableConcept [];
   note : R5_Annotation [];
   certaintySubcomponent : R5_RiskEvidenceSynthesis_CertaintySubcomponent [];
}
