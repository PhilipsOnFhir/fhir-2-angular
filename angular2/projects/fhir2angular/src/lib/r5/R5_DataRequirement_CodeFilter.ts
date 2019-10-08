import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'

export class R5_DataRequirement_CodeFilter      extends R5_Element
{

   static def : string = 'DataRequirement_CodeFilter';
   path : string ;
   searchParam : string ;
   valueSet : string ;
   code : R5_Coding [];
}
