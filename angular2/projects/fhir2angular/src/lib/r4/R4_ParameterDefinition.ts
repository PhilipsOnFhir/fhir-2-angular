import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'

export class R4_ParameterDefinition      extends R4_Element
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
