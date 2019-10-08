import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubscriptionChannelTypeEnum } from './R5_SubscriptionChannelTypeEnum'

export class R5_Subscription_Channel      extends R5_BackboneElement
{

   static def : string = 'Subscription_Channel';
   type : R5_SubscriptionChannelTypeEnum ;
   endpoint : string ;
   payload : string ;
   header : string [];
}
