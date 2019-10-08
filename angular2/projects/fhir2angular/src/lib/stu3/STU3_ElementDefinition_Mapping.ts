import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_ElementDefinition_Mapping      extends STU3_Element
{

   static def : string = 'ElementDefinition_Mapping';
   identity : string ;
   language : string ;
   map : string ;
   comment : string ;
}
