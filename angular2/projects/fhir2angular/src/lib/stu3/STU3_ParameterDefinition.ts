import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ParameterDefinition      extends STU3_Element
{

   static def : string = 'ParameterDefinition';
   name : string ;
   use : string ;
   min : string ;
   max : string ;
   documentation : string ;
   type : string ;
   profile : STU3_Reference ;
}
