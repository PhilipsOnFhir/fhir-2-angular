import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'

export class R4_1_ParameterDefinition      extends R4_1_Element
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
