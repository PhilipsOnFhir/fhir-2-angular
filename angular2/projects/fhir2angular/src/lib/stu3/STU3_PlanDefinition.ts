import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_Contributor } from './STU3_Contributor'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_PlanDefinition_Action } from './STU3_PlanDefinition_Action'
import { STU3_PlanDefinition_Goal } from './STU3_PlanDefinition_Goal'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RelatedArtifact } from './STU3_RelatedArtifact'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_PlanDefinition      extends STU3_DomainResource
{

   static def : string = 'PlanDefinition';
   url : string ;
   identifier : STU3_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   type : STU3_CodeableConcept ;
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
   goal : STU3_PlanDefinition_Goal [];
   action : STU3_PlanDefinition_Action [];
}
