import { STU3_ActionListEnum } from './STU3_ActionListEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_ProcessRequest_Item } from './STU3_ProcessRequest_Item'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ProcessRequest      extends STU3_DomainResource
{

   static def : string = 'ProcessRequest';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   action : STU3_ActionListEnum ;
   target : STU3_Reference ;
   created : string ;
   provider : STU3_Reference ;
   organization : STU3_Reference ;
   request : STU3_Reference ;
   response : STU3_Reference ;
   nullify : boolean ;
   reference : string ;
   item : STU3_ProcessRequest_Item [];
   include : string [];
   exclude : string [];
   period : STU3_Period ;
}
