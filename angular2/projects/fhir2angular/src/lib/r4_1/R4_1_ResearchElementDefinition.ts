import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'
import { R4_1_ResearchElementDefinition_Characteristic } from './R4_1_ResearchElementDefinition_Characteristic'
import { R4_1_ResearchElementTypeEnum } from './R4_1_ResearchElementTypeEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'
import { R4_1_VariableTypeEnum } from './R4_1_VariableTypeEnum'

export class R4_1_ResearchElementDefinition      extends R4_1_DomainResource
{

   static def : string = 'ResearchElementDefinition';
   url : string ;
   identifier : R4_1_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   shortTitle : string ;
   subtitle : string ;
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   subjectCodeableConcept : R4_1_CodeableConcept ;
   subjectReference : R4_1_Reference ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   comment : string [];
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   purpose : string ;
   usage : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R4_1_Period ;
   topic : R4_1_CodeableConcept [];
   author : R4_1_ContactDetail [];
   editor : R4_1_ContactDetail [];
   reviewer : R4_1_ContactDetail [];
   endorser : R4_1_ContactDetail [];
   relatedArtifact : R4_1_RelatedArtifact [];
   library : string [];
   type : R4_1_ResearchElementTypeEnum ;
   variableType : R4_1_VariableTypeEnum ;
   characteristic : R4_1_ResearchElementDefinition_Characteristic [];
}
