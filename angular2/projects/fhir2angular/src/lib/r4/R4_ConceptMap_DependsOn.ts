import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ConceptMap_DependsOn      extends R4_BackboneElement
{

   static def : string = 'ConceptMap_DependsOn';
   property : string ;
   system : string ;
   value : string ;
   display : string ;
}
