import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Measure_Group } from './R4_Measure_Group'
import { R4_Measure_SupplementalData } from './R4_Measure_SupplementalData'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_Measure      extends R4_DomainResource
{

   static def : string = 'Measure';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   subtitle : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   subjectCodeableConcept : R4_CodeableConcept ;
   subjectReference : R4_Reference ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   purpose : string ;
   usage : string ;
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
   library : string [];
   disclaimer : string ;
   scoring : R4_CodeableConcept ;
   compositeScoring : R4_CodeableConcept ;
   type : R4_CodeableConcept [];
   riskAdjustment : string ;
   rateAggregation : string ;
   rationale : string ;
   clinicalRecommendationStatement : string ;
   improvementNotation : R4_CodeableConcept ;
   definition : string [];
   guidance : string ;
   group : R4_Measure_Group [];
   supplementalData : R4_Measure_SupplementalData [];
}
