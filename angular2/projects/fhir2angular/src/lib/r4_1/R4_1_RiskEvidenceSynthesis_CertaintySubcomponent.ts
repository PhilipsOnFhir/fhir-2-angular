import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_RiskEvidenceSynthesis_CertaintySubcomponent      extends R4_1_BackboneElement
{

   static def : string = 'RiskEvidenceSynthesis_CertaintySubcomponent';
   type : R4_1_CodeableConcept ;
   rating : R4_1_CodeableConcept [];
   note : R4_1_Annotation [];
}
