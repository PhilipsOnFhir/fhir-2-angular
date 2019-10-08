import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SubscriptionPayloadContentEnum } from './SubscriptionPayloadContentEnum'

export class Subscription_Payload      extends BackboneElement
{

   static def : string = 'Subscription_Payload';
   contentType : string ;
   content : SubscriptionPayloadContentEnum ;
}
