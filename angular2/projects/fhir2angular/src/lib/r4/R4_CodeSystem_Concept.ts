import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeSystem_Designation } from './R4_CodeSystem_Designation'
import { R4_CodeSystem_Property1 } from './R4_CodeSystem_Property1'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_CodeSystem_Concept      extends R4_BackboneElement
{

   static def : string = 'CodeSystem_Concept';
   code : string ;
   display : string ;
   definition : string ;
   designation : R4_CodeSystem_Designation [];
   property : R4_CodeSystem_Property1 [];
   concept : R4_CodeSystem_Concept [];
}
