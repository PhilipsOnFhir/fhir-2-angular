import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'

export class R4_DataRequirement_CodeFilter      extends R4_Element
{

   static def : string = 'DataRequirement_CodeFilter';
   path : string ;
   searchParam : string ;
   valueSet : string ;
   code : R4_Coding [];
}
