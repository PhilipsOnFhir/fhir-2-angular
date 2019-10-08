import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'

export class DSTU2_ElementDefinition_Mapping      extends DSTU2_Element
{

   static def : string = 'ElementDefinition_Mapping';
   identity : string ;
   language : string ;
   map : string ;
}
