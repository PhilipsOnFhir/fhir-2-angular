import { STU3_Coding } from './STU3_Coding'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_SubscriptionStatusEnum } from './STU3_SubscriptionStatusEnum'
import { STU3_Subscription_Channel } from './STU3_Subscription_Channel'

export class STU3_Subscription      extends STU3_DomainResource
{

   static def : string = 'Subscription';
   status : STU3_SubscriptionStatusEnum ;
   contact : STU3_ContactPoint [];
   end : string ;
   reason : string ;
   criteria : string ;
   error : string ;
   channel : STU3_Subscription_Channel ;
   tag : STU3_Coding [];
}
