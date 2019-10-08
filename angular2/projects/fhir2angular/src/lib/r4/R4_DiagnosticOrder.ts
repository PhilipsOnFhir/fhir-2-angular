import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DiagnosticOrderPriorityEnum } from './R4_DiagnosticOrderPriorityEnum'
import { R4_DiagnosticOrderStatusEnum } from './R4_DiagnosticOrderStatusEnum'
import { R4_DiagnosticOrder_Event } from './R4_DiagnosticOrder_Event'
import { R4_DiagnosticOrder_Item } from './R4_DiagnosticOrder_Item'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_DiagnosticOrder      extends R4_DomainResource
{

   static def : string = 'DiagnosticOrder';
   subject : R4_Reference ;
   orderer : R4_Reference ;
   identifier : R4_Identifier [];
   encounter : R4_Reference ;
   reason : R4_CodeableConcept [];
   supportingInformation : R4_Reference [];
   specimen : R4_Reference [];
   status : R4_DiagnosticOrderStatusEnum ;
   priority : R4_DiagnosticOrderPriorityEnum ;
   event : R4_DiagnosticOrder_Event [];
   item : R4_DiagnosticOrder_Item [];
   note : R4_Annotation [];
}
