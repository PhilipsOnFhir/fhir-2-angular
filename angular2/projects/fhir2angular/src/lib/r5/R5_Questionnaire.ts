import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_Questionnaire_Item } from './R5_Questionnaire_Item'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_Questionnaire      extends R5_DomainResource
{

   static def : string = 'Questionnaire';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   derivedFrom : string [];
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   subjectType : string [];
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R5_Period ;
   code : R5_Coding [];
   item : R5_Questionnaire_Item [];
}
