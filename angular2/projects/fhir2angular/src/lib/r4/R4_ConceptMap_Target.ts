import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ConceptMapEquivalenceEnum } from './R4_ConceptMapEquivalenceEnum'
import { R4_ConceptMap_DependsOn } from './R4_ConceptMap_DependsOn'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ConceptMap_Target      extends R4_BackboneElement
{

   static def : string = 'ConceptMap_Target';
   code : string ;
   display : string ;
   equivalence : R4_ConceptMapEquivalenceEnum ;
   comment : string ;
   dependsOn : R4_ConceptMap_DependsOn [];
   product : R4_ConceptMap_DependsOn [];
}
