import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_ProcessResponse_Notes } from './DSTU2_ProcessResponse_Notes'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ProcessResponse      extends DSTU2_DomainResource
{

   static def : string = 'ProcessResponse';
   identifier : DSTU2_Identifier [];
   request : DSTU2_Reference ;
   outcome : DSTU2_Coding ;
   disposition : string ;
   ruleset : DSTU2_Coding ;
   originalRuleset : DSTU2_Coding ;
   created : string ;
   organization : DSTU2_Reference ;
   requestProvider : DSTU2_Reference ;
   requestOrganization : DSTU2_Reference ;
   form : DSTU2_Coding ;
   notes : DSTU2_ProcessResponse_Notes [];
   error : DSTU2_Coding [];
}
