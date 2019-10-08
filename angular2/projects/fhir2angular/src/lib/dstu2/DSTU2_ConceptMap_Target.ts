import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ConceptMap_DependsOn } from './DSTU2_ConceptMap_DependsOn'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ConceptMap_Target      extends DSTU2_BackboneElement
{

   static def : string = 'ConceptMap_Target';
   codeSystem : string ;
   code : string ;
   equivalence : string ;
   comments : string ;
   dependsOn : DSTU2_ConceptMap_DependsOn [];
   product : DSTU2_ConceptMap_DependsOn [];
}
