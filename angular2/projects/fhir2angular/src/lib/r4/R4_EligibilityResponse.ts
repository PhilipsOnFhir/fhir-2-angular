import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_EligibilityResponse      extends R4_DomainResource
{

   static def : string = 'EligibilityResponse';
   identifier : R4_Identifier [];
   request : R4_Reference ;
   outcome : string ;
   disposition : string ;
   ruleset : R4_Coding ;
   originalRuleset : R4_Coding ;
   created : string ;
   organization : R4_Reference ;
   requestProvider : R4_Reference ;
   requestOrganization : R4_Reference ;
}
