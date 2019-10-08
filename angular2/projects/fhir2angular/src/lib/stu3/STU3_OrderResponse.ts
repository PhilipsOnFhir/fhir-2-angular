import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_OrderStatusEnum } from './STU3_OrderStatusEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_OrderResponse      extends STU3_DomainResource
{

   static def : string = 'OrderResponse';
   identifier : STU3_Identifier [];
   request : STU3_Reference ;
   date : string ;
   who : STU3_Reference ;
   orderStatus : STU3_OrderStatusEnum ;
   description : string ;
   fulfillment : STU3_Reference [];
}
