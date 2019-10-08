import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_Reference } from './R5_Reference'
import { R5_RelatedArtifact } from './R5_RelatedArtifact'
import { R5_RiskEvidenceSynthesis_Certainty } from './R5_RiskEvidenceSynthesis_Certainty'
import { R5_RiskEvidenceSynthesis_RiskEstimate } from './R5_RiskEvidenceSynthesis_RiskEstimate'
import { R5_RiskEvidenceSynthesis_SampleSize } from './R5_RiskEvidenceSynthesis_SampleSize'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_RiskEvidenceSynthesis      extends R5_DomainResource
{

   static def : string = 'RiskEvidenceSynthesis';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : R5_PublicationStatusEnum ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   note : R5_Annotation [];
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R5_Period ;
   topic : R5_CodeableConcept [];
   author : R5_ContactDetail [];
   editor : R5_ContactDetail [];
   reviewer : R5_ContactDetail [];
   endorser : R5_ContactDetail [];
   relatedArtifact : R5_RelatedArtifact [];
   synthesisType : R5_CodeableConcept ;
   studyType : R5_CodeableConcept ;
   population : R5_Reference ;
   exposure : R5_Reference ;
   outcome : R5_Reference ;
   sampleSize : R5_RiskEvidenceSynthesis_SampleSize ;
   riskEstimate : R5_RiskEvidenceSynthesis_RiskEstimate ;
   certainty : R5_RiskEvidenceSynthesis_Certainty [];
}
