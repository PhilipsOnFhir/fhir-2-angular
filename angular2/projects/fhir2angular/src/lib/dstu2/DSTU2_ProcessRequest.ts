import { DSTU2_ActionListEnum } from './DSTU2_ActionListEnum'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_ProcessRequest_Item } from './DSTU2_ProcessRequest_Item'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ProcessRequest      extends DSTU2_DomainResource
{

   static def : string = 'ProcessRequest';
   action : DSTU2_ActionListEnum ;
   identifier : DSTU2_Identifier [];
   ruleset : DSTU2_Coding ;
   originalRuleset : DSTU2_Coding ;
   created : string ;
   target : DSTU2_Reference ;
   provider : DSTU2_Reference ;
   organization : DSTU2_Reference ;
   request : DSTU2_Reference ;
   response : DSTU2_Reference ;
   nullify : boolean ;
   reference : string ;
   item : DSTU2_ProcessRequest_Item [];
   include : string [];
   exclude : string [];
   period : DSTU2_Period ;
}
