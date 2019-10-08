import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_SubscriptionChannelTypeEnum } from './STU3_SubscriptionChannelTypeEnum'

export class STU3_Subscription_Channel      extends STU3_BackboneElement
{

   static def : string = 'Subscription_Channel';
   type : STU3_SubscriptionChannelTypeEnum ;
   endpoint : string ;
   payload : string ;
   header : string [];
}
