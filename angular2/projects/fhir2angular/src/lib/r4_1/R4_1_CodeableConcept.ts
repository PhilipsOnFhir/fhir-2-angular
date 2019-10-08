import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'

export class R4_1_CodeableConcept      extends R4_1_Element
{

   static def : string = 'CodeableConcept';
   coding : R4_1_Coding [];
   text : string ;
}
