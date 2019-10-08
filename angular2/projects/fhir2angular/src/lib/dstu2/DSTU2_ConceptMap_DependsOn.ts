import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ConceptMap_DependsOn      extends DSTU2_BackboneElement
{

   static def : string = 'ConceptMap_DependsOn';
   element : string ;
   codeSystem : string ;
   code : string ;
}
