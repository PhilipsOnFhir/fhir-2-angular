import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_RiskEvidenceSynthesis_Certainty } from './R4_RiskEvidenceSynthesis_Certainty'
import { R4_RiskEvidenceSynthesis_RiskEstimate } from './R4_RiskEvidenceSynthesis_RiskEstimate'
import { R4_RiskEvidenceSynthesis_SampleSize } from './R4_RiskEvidenceSynthesis_SampleSize'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_RiskEvidenceSynthesis      extends R4_DomainResource
{

   static def : string = 'RiskEvidenceSynthesis';
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
   outcome : R4_Reference ;
   sampleSize : R4_RiskEvidenceSynthesis_SampleSize ;
   riskEstimate : R4_RiskEvidenceSynthesis_RiskEstimate ;
   certainty : R4_RiskEvidenceSynthesis_Certainty [];
}
