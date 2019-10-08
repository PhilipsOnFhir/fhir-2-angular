import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_EnrollmentResponse      extends DSTU2_DomainResource
{

   static def : string = 'EnrollmentResponse';
   identifier : DSTU2_Identifier [];
   request : DSTU2_Reference ;
   outcome : string ;
   disposition : string ;
   ruleset : DSTU2_Coding ;
   originalRuleset : DSTU2_Coding ;
   created : string ;
   organization : DSTU2_Reference ;
   requestProvider : DSTU2_Reference ;
   requestOrganization : DSTU2_Reference ;
}
