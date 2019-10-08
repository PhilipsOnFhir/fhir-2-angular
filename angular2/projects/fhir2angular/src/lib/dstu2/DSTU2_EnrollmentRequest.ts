import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_EnrollmentRequest      extends DSTU2_DomainResource
{

   static def : string = 'EnrollmentRequest';
   identifier : DSTU2_Identifier [];
   ruleset : DSTU2_Coding ;
   originalRuleset : DSTU2_Coding ;
   created : string ;
   target : DSTU2_Reference ;
   provider : DSTU2_Reference ;
   organization : DSTU2_Reference ;
   subject : DSTU2_Reference ;
   coverage : DSTU2_Reference ;
   relationship : DSTU2_Coding ;
}
