import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_Reference } from './R5_Reference'
import { R5_RelatedArtifact } from './R5_RelatedArtifact'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_ResearchDefinition      extends R5_DomainResource
{

   static def : string = 'ResearchDefinition';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   shortTitle : string ;
   subtitle : string ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   subjectCodeableConcept : R5_CodeableConcept ;
   subjectReference : R5_Reference ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   comment : string [];
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
   population : R5_Reference ;
   exposure : R5_Reference ;
   exposureAlternative : R5_Reference ;
   outcome : R5_Reference ;
}
