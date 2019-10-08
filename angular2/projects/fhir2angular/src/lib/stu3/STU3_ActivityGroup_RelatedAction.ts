import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Range } from './STU3_Range'

export class STU3_ActivityGroup_RelatedAction      extends STU3_BackboneElement
{

   static def : string = 'ActivityGroup_RelatedAction';
   actionIdentifier : STU3_Identifier ;
   relationship : string ;
   offsetDuration : string ;
   offsetRange : STU3_Range ;
   anchor : string ;
}
