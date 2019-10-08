import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EffectEvidenceSynthesis_Certainty } from './R4_1_EffectEvidenceSynthesis_Certainty'
import { R4_1_EffectEvidenceSynthesis_EffectEstimate } from './R4_1_EffectEvidenceSynthesis_EffectEstimate'
import { R4_1_EffectEvidenceSynthesis_ResultsByExposure } from './R4_1_EffectEvidenceSynthesis_ResultsByExposure'
import { R4_1_EffectEvidenceSynthesis_SampleSize } from './R4_1_EffectEvidenceSynthesis_SampleSize'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_EffectEvidenceSynthesis      extends R4_1_DomainResource
{

   static def : string = 'EffectEvidenceSynthesis';
   url : string ;
   identifier : R4_1_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : R4_1_PublicationStatusEnum ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   note : R4_1_Annotation [];
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R4_1_Period ;
   topic : R4_1_CodeableConcept [];
   author : R4_1_ContactDetail [];
   editor : R4_1_ContactDetail [];
   reviewer : R4_1_ContactDetail [];
   endorser : R4_1_ContactDetail [];
   relatedArtifact : R4_1_RelatedArtifact [];
   synthesisType : R4_1_CodeableConcept ;
   studyType : R4_1_CodeableConcept ;
   population : R4_1_Reference ;
   exposure : R4_1_Reference ;
   exposureAlternative : R4_1_Reference ;
   outcome : R4_1_Reference ;
   sampleSize : R4_1_EffectEvidenceSynthesis_SampleSize ;
   resultsByExposure : R4_1_EffectEvidenceSynthesis_ResultsByExposure [];
   effectEstimate : R4_1_EffectEvidenceSynthesis_EffectEstimate [];
   certainty : R4_1_EffectEvidenceSynthesis_Certainty [];
}
