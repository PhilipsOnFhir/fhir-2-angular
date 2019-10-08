import { R4_1_ActionListEnum } from './R4_1_ActionListEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_ProcessRequest_Item } from './R4_1_ProcessRequest_Item'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ProcessRequest      extends R4_1_DomainResource
{

   static def : string = 'ProcessRequest';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   action : R4_1_ActionListEnum ;
   target : R4_1_Reference ;
   created : string ;
   provider : R4_1_Reference ;
   request : R4_1_Reference ;
   response : R4_1_Reference ;
   nullify : boolean ;
   reference : string ;
   item : R4_1_ProcessRequest_Item [];
   include : string [];
   exclude : string [];
   period : R4_1_Period ;
}
