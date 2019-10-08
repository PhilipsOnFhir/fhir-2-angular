import { R4_ActionListEnum } from './R4_ActionListEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_ProcessRequest_Item } from './R4_ProcessRequest_Item'
import { R4_Reference } from './R4_Reference'

export class R4_ProcessRequest      extends R4_DomainResource
{

   static def : string = 'ProcessRequest';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   action : R4_ActionListEnum ;
   target : R4_Reference ;
   created : string ;
   provider : R4_Reference ;
   request : R4_Reference ;
   response : R4_Reference ;
   nullify : boolean ;
   reference : string ;
   item : R4_ProcessRequest_Item [];
   include : string [];
   exclude : string [];
   period : R4_Period ;
}
