import { R5_ActionListEnum } from './R5_ActionListEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_ProcessRequest_Item } from './R5_ProcessRequest_Item'
import { R5_Reference } from './R5_Reference'

export class R5_ProcessRequest      extends R5_DomainResource
{

   static def : string = 'ProcessRequest';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   action : R5_ActionListEnum ;
   target : R5_Reference ;
   created : string ;
   provider : R5_Reference ;
   request : R5_Reference ;
   response : R5_Reference ;
   nullify : boolean ;
   reference : string ;
   item : R5_ProcessRequest_Item [];
   include : string [];
   exclude : string [];
   period : R5_Period ;
}
