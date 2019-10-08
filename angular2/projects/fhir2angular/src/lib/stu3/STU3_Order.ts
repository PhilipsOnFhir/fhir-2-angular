import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Order_When } from './STU3_Order_When'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Order      extends STU3_DomainResource
{

   static def : string = 'Order';
   identifier : STU3_Identifier [];
   date : string ;
   subject : STU3_Reference ;
   source : STU3_Reference ;
   target : STU3_Reference ;
   reasonCodeableConcept : STU3_CodeableConcept ;
   reasonReference : STU3_Reference ;
   when : STU3_Order_When ;
   detail : STU3_Reference [];
}
