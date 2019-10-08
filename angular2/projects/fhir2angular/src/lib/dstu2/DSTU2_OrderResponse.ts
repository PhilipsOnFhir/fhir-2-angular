import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_OrderStatusEnum } from './DSTU2_OrderStatusEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_OrderResponse      extends DSTU2_DomainResource
{

   static def : string = 'OrderResponse';
   identifier : DSTU2_Identifier [];
   request : DSTU2_Reference ;
   date : string ;
   who : DSTU2_Reference ;
   orderStatus : DSTU2_OrderStatusEnum ;
   description : string ;
   fulfillment : DSTU2_Reference [];
}
