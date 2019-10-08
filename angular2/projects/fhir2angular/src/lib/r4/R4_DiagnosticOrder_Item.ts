import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DiagnosticOrderStatusEnum } from './R4_DiagnosticOrderStatusEnum'
import { R4_DiagnosticOrder_Event } from './R4_DiagnosticOrder_Event'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_DiagnosticOrder_Item      extends R4_BackboneElement
{

   static def : string = 'DiagnosticOrder_Item';
   code : R4_CodeableConcept ;
   specimen : R4_Reference [];
   bodySite : R4_CodeableConcept ;
   status : R4_DiagnosticOrderStatusEnum ;
   event : R4_DiagnosticOrder_Event [];
}
