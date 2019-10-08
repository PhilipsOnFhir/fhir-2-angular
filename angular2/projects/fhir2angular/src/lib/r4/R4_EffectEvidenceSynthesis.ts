import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EffectEvidenceSynthesis_Certainty } from './R4_EffectEvidenceSynthesis_Certainty'
import { R4_EffectEvidenceSynthesis_EffectEstimate } from './R4_EffectEvidenceSynthesis_EffectEstimate'
import { R4_EffectEvidenceSynthesis_ResultsByExposure } from './R4_EffectEvidenceSynthesis_ResultsByExposure'
import { R4_EffectEvidenceSynthesis_SampleSize } from './R4_EffectEvidenceSynthesis_SampleSize'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_EffectEvidenceSynthesis      extends R4_DomainResource
{

   static def : string = 'EffectEvidenceSynthesis';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : R4_PublicationStatusEnum ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   note : R4_Annotation [];
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R4_Period ;
   topic : R4_CodeableConcept [];
   author : R4_ContactDetail [];
   editor : R4_ContactDetail [];
   reviewer : R4_ContactDetail [];
   endorser : R4_ContactDetail [];
   relatedArtifact : R4_RelatedArtifact [];
   synthesisType : R4_CodeableConcept ;
   studyType : R4_CodeableConcept ;
   population : R4_Reference ;
   exposure : R4_Reference ;
   exposureAlternative : R4_Reference ;
   outcome : R4_Reference ;
   sampleSize : R4_EffectEvidenceSynthesis_SampleSize ;
   resultsByExposure : R4_EffectEvidenceSynthesis_ResultsByExposure [];
   effectEstimate : R4_EffectEvidenceSynthesis_EffectEstimate [];
   certainty : R4_EffectEvidenceSynthesis_Certainty [];
}
