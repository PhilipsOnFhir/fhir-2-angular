import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_ResearchElementDefinition_Characteristic } from './R4_ResearchElementDefinition_Characteristic'
import { R4_ResearchElementTypeEnum } from './R4_ResearchElementTypeEnum'
import { R4_UsageContext } from './R4_UsageContext'
import { R4_VariableTypeEnum } from './R4_VariableTypeEnum'

export class R4_ResearchElementDefinition      extends R4_DomainResource
{

   static def : string = 'ResearchElementDefinition';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   shortTitle : string ;
   subtitle : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   subjectCodeableConcept : R4_CodeableConcept ;
   subjectReference : R4_Reference ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   comment : string [];
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
   type : R4_ResearchElementTypeEnum ;
   variableType : R4_VariableTypeEnum ;
   characteristic : R4_ResearchElementDefinition_Characteristic [];
}
