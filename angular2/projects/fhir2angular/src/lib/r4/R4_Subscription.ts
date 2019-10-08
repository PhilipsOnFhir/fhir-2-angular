import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubscriptionStatusEnum } from './R4_SubscriptionStatusEnum'
import { R4_Subscription_Channel } from './R4_Subscription_Channel'

export class R4_Subscription      extends R4_DomainResource
{

   static def : string = 'Subscription';
   status : R4_SubscriptionStatusEnum ;
   contact : R4_ContactPoint [];
   end : string ;
   reason : string ;
   criteria : string ;
   error : string ;
   channel : R4_Subscription_Channel ;
}
