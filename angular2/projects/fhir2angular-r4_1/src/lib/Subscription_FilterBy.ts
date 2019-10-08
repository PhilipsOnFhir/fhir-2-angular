import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SubscriptionFilterByMatchTypeEnum } from './SubscriptionFilterByMatchTypeEnum'

export class Subscription_FilterBy      extends BackboneElement
{

   static def : string = 'Subscription_FilterBy';
   name : string ;
   matchType : SubscriptionFilterByMatchTypeEnum ;
   value : string ;
}
