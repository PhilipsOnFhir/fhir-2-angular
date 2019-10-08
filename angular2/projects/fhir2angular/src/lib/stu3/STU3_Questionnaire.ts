import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_Questionnaire_Item } from './STU3_Questionnaire_Item'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_Questionnaire      extends STU3_DomainResource
{

   static def : string = 'Questionnaire';
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
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : STU3_Period ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   contact : STU3_ContactDetail [];
   copyright : string ;
   code : STU3_Coding [];
   subjectType : STU3_ResourceTypeEnum [];
   item : STU3_Questionnaire_Item [];
}
