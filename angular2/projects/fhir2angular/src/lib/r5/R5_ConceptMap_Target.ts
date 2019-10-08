import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ConceptMapEquivalenceEnum } from './R5_ConceptMapEquivalenceEnum'
import { R5_ConceptMap_DependsOn } from './R5_ConceptMap_DependsOn'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ConceptMap_Target      extends R5_BackboneElement
{

   static def : string = 'ConceptMap_Target';
   code : string ;
   display : string ;
   equivalence : R5_ConceptMapEquivalenceEnum ;
   comment : string ;
   dependsOn : R5_ConceptMap_DependsOn [];
   product : R5_ConceptMap_DependsOn [];
}
