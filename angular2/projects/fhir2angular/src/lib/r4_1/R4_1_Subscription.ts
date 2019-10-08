import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubscriptionStatusEnum } from './R4_1_SubscriptionStatusEnum'
import { R4_1_Subscription_Channel } from './R4_1_Subscription_Channel'

export class R4_1_Subscription      extends R4_1_DomainResource
{

   static def : string = 'Subscription';
   status : R4_1_SubscriptionStatusEnum ;
   contact : R4_1_ContactPoint [];
   end : string ;
   reason : string ;
   criteria : string ;
   error : string ;
   channel : R4_1_Subscription_Channel ;
}
