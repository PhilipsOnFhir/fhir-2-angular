import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DiagnosticOrderStatusEnum } from './R4_DiagnosticOrderStatusEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_DiagnosticOrder_Event      extends R4_BackboneElement
{

   static def : string = 'DiagnosticOrder_Event';
   status : R4_DiagnosticOrderStatusEnum ;
   description : R4_CodeableConcept ;
   dateTime : string ;
   actor : R4_Reference ;
}
