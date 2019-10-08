import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_CodeableConcept      extends STU3_Element
{

   static def : string = 'CodeableConcept';
   coding : STU3_Coding [];
   text : string ;
}
