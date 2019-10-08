import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ConceptMapEquivalenceEnum } from './R4_1_ConceptMapEquivalenceEnum'
import { R4_1_ConceptMap_DependsOn } from './R4_1_ConceptMap_DependsOn'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ConceptMap_Target      extends R4_1_BackboneElement
{

   static def : string = 'ConceptMap_Target';
   code : string ;
   display : string ;
   equivalence : R4_1_ConceptMapEquivalenceEnum ;
   comment : string ;
   dependsOn : R4_1_ConceptMap_DependsOn [];
   product : R4_1_ConceptMap_DependsOn [];
}
