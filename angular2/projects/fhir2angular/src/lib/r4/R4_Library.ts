import { R4_Attachment } from './R4_Attachment'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DataRequirement } from './R4_DataRequirement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ParameterDefinition } from './R4_ParameterDefinition'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_Library      extends R4_DomainResource
{

   static def : string = 'Library';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   subtitle : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   type : R4_CodeableConcept ;
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
   parameter : R4_ParameterDefinition [];
   dataRequirement : R4_DataRequirement [];
   content : R4_Attachment [];
}
