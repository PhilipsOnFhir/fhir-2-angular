import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_ElementDefinition_Base      extends STU3_Element
{

   static def : string = 'ElementDefinition_Base';
   path : string ;
   min : string ;
   max : string ;
}
