import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubscriptionChannelTypeEnum } from './R4_SubscriptionChannelTypeEnum'

export class R4_Subscription_Channel      extends R4_BackboneElement
{

   static def : string = 'Subscription_Channel';
   type : R4_SubscriptionChannelTypeEnum ;
   endpoint : string ;
   payload : string ;
   header : string [];
}
