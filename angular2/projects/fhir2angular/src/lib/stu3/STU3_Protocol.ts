import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ProtocolStatusEnum } from './STU3_ProtocolStatusEnum'
import { STU3_ProtocolTypeEnum } from './STU3_ProtocolTypeEnum'
import { STU3_Protocol_Step } from './STU3_Protocol_Step'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Protocol      extends STU3_DomainResource
{

   static def : string = 'Protocol';
   identifier : STU3_Identifier [];
   title : string ;
   status : STU3_ProtocolStatusEnum ;
   type : STU3_ProtocolTypeEnum ;
   subject : STU3_Reference ;
   group : STU3_Reference ;
   purpose : string ;
   author : STU3_Reference ;
   step : STU3_Protocol_Step [];
}
