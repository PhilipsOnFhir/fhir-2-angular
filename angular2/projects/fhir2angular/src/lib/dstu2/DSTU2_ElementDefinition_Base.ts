import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'

export class DSTU2_ElementDefinition_Base      extends DSTU2_Element
{

   static def : string = 'ElementDefinition_Base';
   path : string ;
   min : string ;
   max : string ;
}
