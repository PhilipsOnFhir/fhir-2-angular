import { R4_ChargeItemDefinition_Applicability } from './R4_ChargeItemDefinition_Applicability'
import { R4_ChargeItemDefinition_PropertyGroup } from './R4_ChargeItemDefinition_PropertyGroup'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Reference } from './R4_Reference'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_ChargeItemDefinition      extends R4_DomainResource
{

   static def : string = 'ChargeItemDefinition';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   title : string ;
   derivedFromUri : string [];
   partOf : string [];
   replaces : string [];
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R4_Period ;
   code : R4_CodeableConcept ;
   instance : R4_Reference [];
   applicability : R4_ChargeItemDefinition_Applicability [];
   propertyGroup : R4_ChargeItemDefinition_PropertyGroup [];
}
