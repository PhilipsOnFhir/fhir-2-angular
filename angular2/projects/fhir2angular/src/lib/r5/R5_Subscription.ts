import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubscriptionStatusEnum } from './R5_SubscriptionStatusEnum'
import { R5_Subscription_Channel } from './R5_Subscription_Channel'

export class R5_Subscription      extends R5_DomainResource
{

   static def : string = 'Subscription';
   status : R5_SubscriptionStatusEnum ;
   contact : R5_ContactPoint [];
   end : string ;
   reason : string ;
   criteria : string ;
   error : string ;
   channel : R5_Subscription_Channel ;
}
