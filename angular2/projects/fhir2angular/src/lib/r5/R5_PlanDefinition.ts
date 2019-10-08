import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_PlanDefinition_Action } from './R5_PlanDefinition_Action'
import { R5_PlanDefinition_Goal } from './R5_PlanDefinition_Goal'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_Reference } from './R5_Reference'
import { R5_RelatedArtifact } from './R5_RelatedArtifact'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_PlanDefinition      extends R5_DomainResource
{

   static def : string = 'PlanDefinition';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   subtitle : string ;
   type : R5_CodeableConcept ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   subjectCodeableConcept : R5_CodeableConcept ;
   subjectReference : R5_Reference ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   purpose : string ;
   usage : string ;
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
   library : string [];
   goal : R5_PlanDefinition_Goal [];
   action : R5_PlanDefinition_Action [];
}
