import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DiagnosticOrderPriorityEnum } from './DSTU2_DiagnosticOrderPriorityEnum'
import { DSTU2_DiagnosticOrderStatusEnum } from './DSTU2_DiagnosticOrderStatusEnum'
import { DSTU2_DiagnosticOrder_Event } from './DSTU2_DiagnosticOrder_Event'
import { DSTU2_DiagnosticOrder_Item } from './DSTU2_DiagnosticOrder_Item'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DiagnosticOrder      extends DSTU2_DomainResource
{

   static def : string = 'DiagnosticOrder';
   subject : DSTU2_Reference ;
   orderer : DSTU2_Reference ;
   identifier : DSTU2_Identifier [];
   encounter : DSTU2_Reference ;
   reason : DSTU2_CodeableConcept [];
   supportingInformation : DSTU2_Reference [];
   specimen : DSTU2_Reference [];
   status : DSTU2_DiagnosticOrderStatusEnum ;
   priority : DSTU2_DiagnosticOrderPriorityEnum ;
   event : DSTU2_DiagnosticOrder_Event [];
   item : DSTU2_DiagnosticOrder_Item [];
   note : DSTU2_Annotation [];
}
