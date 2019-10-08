import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeSystem_Designation } from './STU3_CodeSystem_Designation'
import { STU3_CodeSystem_Property1 } from './STU3_CodeSystem_Property1'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_CodeSystem_Concept      extends STU3_BackboneElement
{

   static def : string = 'CodeSystem_Concept';
   code : string ;
   display : string ;
   definition : string ;
   designation : STU3_CodeSystem_Designation [];
   property : STU3_CodeSystem_Property1 [];
   concept : STU3_CodeSystem_Concept [];
}
