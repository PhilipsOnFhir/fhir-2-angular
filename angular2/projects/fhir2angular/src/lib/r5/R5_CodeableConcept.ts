import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'

export class R5_CodeableConcept      extends R5_Element
{

   static def : string = 'CodeableConcept';
   coding : R5_Coding [];
   text : string ;
}
