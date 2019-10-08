import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeSystem_Designation } from './R4_1_CodeSystem_Designation'
import { R4_1_CodeSystem_Property1 } from './R4_1_CodeSystem_Property1'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_CodeSystem_Concept      extends R4_1_BackboneElement
{

   static def : string = 'CodeSystem_Concept';
   code : string ;
   display : string ;
   definition : string ;
   designation : R4_1_CodeSystem_Designation [];
   property : R4_1_CodeSystem_Property1 [];
   concept : R4_1_CodeSystem_Concept [];
}
