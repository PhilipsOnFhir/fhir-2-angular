import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_Contributor } from './STU3_Contributor'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Measure_Group } from './STU3_Measure_Group'
import { STU3_Measure_SupplementalData } from './STU3_Measure_SupplementalData'
import { STU3_Period } from './STU3_Period'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RelatedArtifact } from './STU3_RelatedArtifact'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_Measure      extends STU3_DomainResource
{

   static def : string = 'Measure';
   url : string ;
   identifier : STU3_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   description : string ;
   purpose : string ;
   usage : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : STU3_Period ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   topic : STU3_CodeableConcept [];
   contributor : STU3_Contributor [];
   contact : STU3_ContactDetail [];
   copyright : string ;
   relatedArtifact : STU3_RelatedArtifact [];
   library : STU3_Reference [];
   disclaimer : string ;
   scoring : STU3_CodeableConcept ;
   compositeScoring : STU3_CodeableConcept ;
   type : STU3_CodeableConcept [];
   riskAdjustment : string ;
   rateAggregation : string ;
   rationale : string ;
   clinicalRecommendationStatement : string ;
   improvementNotation : string ;
   definition : string [];
   guidance : string ;
   set : string ;
   group : STU3_Measure_Group [];
   supplementalData : STU3_Measure_SupplementalData [];
}
