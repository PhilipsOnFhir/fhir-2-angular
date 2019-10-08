import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DiagnosticOrderStatusEnum } from './DSTU2_DiagnosticOrderStatusEnum'
import { DSTU2_DiagnosticOrder_Event } from './DSTU2_DiagnosticOrder_Event'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DiagnosticOrder_Item      extends DSTU2_BackboneElement
{

   static def : string = 'DiagnosticOrder_Item';
   code : DSTU2_CodeableConcept ;
   specimen : DSTU2_Reference [];
   bodySite : DSTU2_CodeableConcept ;
   status : DSTU2_DiagnosticOrderStatusEnum ;
   event : DSTU2_DiagnosticOrder_Event [];
}
