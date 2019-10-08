import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ConceptMap_DependsOn      extends STU3_BackboneElement
{

   static def : string = 'ConceptMap_DependsOn';
   property : string ;
   system : string ;
   code : string ;
   display : string ;
}
