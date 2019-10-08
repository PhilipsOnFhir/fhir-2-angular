import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Subscription_Payload } from './Subscription_Payload'

export class Subscription_Channel      extends BackboneElement
{

   static def : string = 'Subscription_Channel';
   type : CodeableConcept ;
   endpoint : string ;
   header : string [];
   heartbeatPeriod : string ;
   payload : Subscription_Payload ;
}
