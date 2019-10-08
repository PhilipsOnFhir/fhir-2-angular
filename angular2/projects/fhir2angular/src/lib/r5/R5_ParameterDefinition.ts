import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'

export class R5_ParameterDefinition      extends R5_Element
{

   static def : string = 'ParameterDefinition';
   name : string ;
   use : string ;
   min : string ;
   max : string ;
   documentation : string ;
   type : string ;
   profile : string ;
}
