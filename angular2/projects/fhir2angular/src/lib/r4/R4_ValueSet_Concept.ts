import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ValueSet_Designation } from './R4_ValueSet_Designation'

export class R4_ValueSet_Concept      extends R4_BackboneElement
{

   static def : string = 'ValueSet_Concept';
   code : string ;
   display : string ;
   designation : R4_ValueSet_Designation [];
}
