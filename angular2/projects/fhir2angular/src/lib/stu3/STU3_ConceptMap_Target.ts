import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ConceptMapEquivalenceEnum } from './STU3_ConceptMapEquivalenceEnum'
import { STU3_ConceptMap_DependsOn } from './STU3_ConceptMap_DependsOn'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ConceptMap_Target      extends STU3_BackboneElement
{

   static def : string = 'ConceptMap_Target';
   code : string ;
   display : string ;
   equivalence : STU3_ConceptMapEquivalenceEnum ;
   comment : string ;
   dependsOn : STU3_ConceptMap_DependsOn [];
   product : STU3_ConceptMap_DependsOn [];
}
