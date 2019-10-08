import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_Questionnaire_Item } from './R4_1_Questionnaire_Item'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_Questionnaire      extends R4_1_DomainResource
{

   static def : string = 'Questionnaire';
   url : string ;
   identifier : R4_1_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   derivedFrom : string [];
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   subjectType : string [];
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R4_1_Period ;
   code : R4_1_Coding [];
   item : R4_1_Questionnaire_Item [];
}
