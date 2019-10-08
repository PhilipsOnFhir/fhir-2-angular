import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_SubscriptionStatusEnum } from './DSTU2_SubscriptionStatusEnum'
import { DSTU2_Subscription_Channel } from './DSTU2_Subscription_Channel'

export class DSTU2_Subscription      extends DSTU2_DomainResource
{

   static def : string = 'Subscription';
   criteria : string ;
   contact : DSTU2_ContactPoint [];
   reason : string ;
   status : DSTU2_SubscriptionStatusEnum ;
   error : string ;
   channel : DSTU2_Subscription_Channel ;
   end : string ;
   tag : DSTU2_Coding [];
}
