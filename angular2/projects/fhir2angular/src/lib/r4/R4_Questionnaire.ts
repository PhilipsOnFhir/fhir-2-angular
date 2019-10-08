import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Questionnaire_Item } from './R4_Questionnaire_Item'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_Questionnaire      extends R4_DomainResource
{

   static def : string = 'Questionnaire';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   derivedFrom : string [];
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   subjectType : string [];
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R4_Period ;
   code : R4_Coding [];
   item : R4_Questionnaire_Item [];
}
