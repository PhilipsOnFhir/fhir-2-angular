import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_OrderStatusEnum } from './R4_OrderStatusEnum'
import { R4_Reference } from './R4_Reference'

export class R4_OrderResponse      extends R4_DomainResource
{

   static def : string = 'OrderResponse';
   identifier : R4_Identifier [];
   request : R4_Reference ;
   date : string ;
   who : R4_Reference ;
   orderStatus : R4_OrderStatusEnum ;
   description : string ;
   fulfillment : R4_Reference [];
}
