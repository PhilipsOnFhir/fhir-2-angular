import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_SubscriptionChannelTypeEnum } from './DSTU2_SubscriptionChannelTypeEnum'

export class DSTU2_Subscription_Channel      extends DSTU2_BackboneElement
{

   static def : string = 'Subscription_Channel';
   type : DSTU2_SubscriptionChannelTypeEnum ;
   endpoint : string ;
   payload : string ;
   header : string ;
}
