import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { SubscriptionStatusEnum } from './SubscriptionStatusEnum'
import { Subscription_Channel } from './Subscription_Channel'
import { Subscription_FilterBy } from './Subscription_FilterBy'

export class Subscription      extends DomainResource
{

   static def : string = 'Subscription';
   identifier : Identifier [];
   name : string ;
   status : SubscriptionStatusEnum ;
   topic : Reference ;
   contact : ContactPoint [];
   end : string ;
   reason : string ;
   filterBy : Subscription_FilterBy [];
   error : CodeableConcept [];
   eventCount : string ;
   channel : Subscription_Channel ;
}
