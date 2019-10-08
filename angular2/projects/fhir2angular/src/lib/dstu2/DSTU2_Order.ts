import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Order_When } from './DSTU2_Order_When'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Order      extends DSTU2_DomainResource
{

   static def : string = 'Order';
   identifier : DSTU2_Identifier [];
   date : string ;
   subject : DSTU2_Reference ;
   source : DSTU2_Reference ;
   target : DSTU2_Reference ;
   reasonCodeableConcept : DSTU2_CodeableConcept ;
   reasonReference : DSTU2_Reference ;
   when : DSTU2_Order_When ;
   detail : DSTU2_Reference [];
}
