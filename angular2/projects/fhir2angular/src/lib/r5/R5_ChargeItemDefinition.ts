import { R5_ChargeItemDefinition_Applicability } from './R5_ChargeItemDefinition_Applicability'
import { R5_ChargeItemDefinition_PropertyGroup } from './R5_ChargeItemDefinition_PropertyGroup'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_Reference } from './R5_Reference'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_ChargeItemDefinition      extends R5_DomainResource
{

   static def : string = 'ChargeItemDefinition';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   title : string ;
   derivedFromUri : string [];
   partOf : string [];
   replaces : string [];
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R5_Period ;
   code : R5_CodeableConcept ;
   instance : R5_Reference [];
   applicability : R5_ChargeItemDefinition_Applicability [];
   propertyGroup : R5_ChargeItemDefinition_PropertyGroup [];
}
