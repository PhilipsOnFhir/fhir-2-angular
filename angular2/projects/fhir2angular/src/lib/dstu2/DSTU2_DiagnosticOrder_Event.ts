import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DiagnosticOrderStatusEnum } from './DSTU2_DiagnosticOrderStatusEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DiagnosticOrder_Event      extends DSTU2_BackboneElement
{

   static def : string = 'DiagnosticOrder_Event';
   status : DSTU2_DiagnosticOrderStatusEnum ;
   description : DSTU2_CodeableConcept ;
   dateTime : string ;
   actor : DSTU2_Reference ;
}
