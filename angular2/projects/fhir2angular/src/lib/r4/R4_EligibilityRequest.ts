import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_EligibilityRequest      extends R4_DomainResource
{

   static def : string = 'EligibilityRequest';
   identifier : R4_Identifier [];
   ruleset : R4_Coding ;
   originalRuleset : R4_Coding ;
   created : string ;
   target : R4_Reference ;
   provider : R4_Reference ;
   organization : R4_Reference ;
}
