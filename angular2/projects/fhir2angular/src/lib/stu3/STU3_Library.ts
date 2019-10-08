import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_Contributor } from './STU3_Contributor'
import { STU3_DataRequirement } from './STU3_DataRequirement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ParameterDefinition } from './STU3_ParameterDefinition'
import { STU3_Period } from './STU3_Period'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_RelatedArtifact } from './STU3_RelatedArtifact'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_Library      extends STU3_DomainResource
{

   static def : string = 'Library';
   url : string ;
   identifier : STU3_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   type : STU3_CodeableConcept ;
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
   parameter : STU3_ParameterDefinition [];
   dataRequirement : STU3_DataRequirement [];
   content : STU3_Attachment [];
}
