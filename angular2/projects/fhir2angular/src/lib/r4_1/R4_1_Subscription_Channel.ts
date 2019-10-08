import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubscriptionChannelTypeEnum } from './R4_1_SubscriptionChannelTypeEnum'

export class R4_1_Subscription_Channel      extends R4_1_BackboneElement
{

   static def : string = 'Subscription_Channel';
   type : R4_1_SubscriptionChannelTypeEnum ;
   endpoint : string ;
   payload : string ;
   header : string [];
}
