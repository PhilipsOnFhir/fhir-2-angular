import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeSystem_Designation } from './R5_CodeSystem_Designation'
import { R5_CodeSystem_Property1 } from './R5_CodeSystem_Property1'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_CodeSystem_Concept      extends R5_BackboneElement
{

   static def : string = 'CodeSystem_Concept';
   code : string ;
   display : string ;
   definition : string ;
   designation : R5_CodeSystem_Designation [];
   property : R5_CodeSystem_Property1 [];
   concept : R5_CodeSystem_Concept [];
}
