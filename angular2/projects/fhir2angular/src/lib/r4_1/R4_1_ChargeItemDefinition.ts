import { R4_1_ChargeItemDefinition_Applicability } from './R4_1_ChargeItemDefinition_Applicability'
import { R4_1_ChargeItemDefinition_PropertyGroup } from './R4_1_ChargeItemDefinition_PropertyGroup'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_ChargeItemDefinition      extends R4_1_DomainResource
{

   static def : string = 'ChargeItemDefinition';
   url : string ;
   identifier : R4_1_Identifier [];
   version : string ;
   title : string ;
   derivedFromUri : string [];
   partOf : string [];
   replaces : string [];
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R4_1_Period ;
   code : R4_1_CodeableConcept ;
   instance : R4_1_Reference [];
   applicability : R4_1_ChargeItemDefinition_Applicability [];
   propertyGroup : R4_1_ChargeItemDefinition_PropertyGroup [];
}
