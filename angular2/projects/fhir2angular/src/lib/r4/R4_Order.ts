import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Order_When } from './R4_Order_When'
import { R4_Reference } from './R4_Reference'

export class R4_Order      extends R4_DomainResource
{

   static def : string = 'Order';
   identifier : R4_Identifier [];
   date : string ;
   subject : R4_Reference ;
   source : R4_Reference ;
   target : R4_Reference ;
   reasonCodeableConcept : R4_CodeableConcept ;
   reasonReference : R4_Reference ;
   when : R4_Order_When ;
   detail : R4_Reference [];
}
