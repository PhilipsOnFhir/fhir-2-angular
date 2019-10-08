import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ConceptMap_DependsOn      extends R5_BackboneElement
{

   static def : string = 'ConceptMap_DependsOn';
   property : string ;
   system : string ;
   value : string ;
   display : string ;
}
