import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'

export class R4_CodeableConcept      extends R4_Element
{

   static def : string = 'CodeableConcept';
   coding : R4_Coding [];
   text : string ;
}
