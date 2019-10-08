import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DiagnosticOrderStatusEnum } from './STU3_DiagnosticOrderStatusEnum'
import { STU3_DiagnosticOrder_Event } from './STU3_DiagnosticOrder_Event'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_DiagnosticOrder_Item      extends STU3_BackboneElement
{

   static def : string = 'DiagnosticOrder_Item';
   code : STU3_CodeableConcept ;
   bodySite : STU3_CodeableConcept ;
   status : STU3_DiagnosticOrderStatusEnum ;
   event : STU3_DiagnosticOrder_Event [];
}
