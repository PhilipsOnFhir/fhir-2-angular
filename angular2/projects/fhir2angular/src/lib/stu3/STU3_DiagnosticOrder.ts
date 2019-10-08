import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DiagnosticOrderPriorityEnum } from './STU3_DiagnosticOrderPriorityEnum'
import { STU3_DiagnosticOrderStatusEnum } from './STU3_DiagnosticOrderStatusEnum'
import { STU3_DiagnosticOrder_Event } from './STU3_DiagnosticOrder_Event'
import { STU3_DiagnosticOrder_Item } from './STU3_DiagnosticOrder_Item'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DiagnosticOrder      extends STU3_DomainResource
{

   static def : string = 'DiagnosticOrder';
   identifier : STU3_Identifier [];
   status : STU3_DiagnosticOrderStatusEnum ;
   priority : STU3_DiagnosticOrderPriorityEnum ;
   subject : STU3_Reference ;
   encounter : STU3_Reference ;
   orderer : STU3_Reference ;
   reason : STU3_CodeableConcept [];
   supportingInformation : STU3_Reference [];
   event : STU3_DiagnosticOrder_Event [];
   item : STU3_DiagnosticOrder_Item [];
   note : STU3_Annotation [];
}
