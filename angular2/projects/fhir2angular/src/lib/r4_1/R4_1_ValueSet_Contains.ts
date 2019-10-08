import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ValueSet_Designation } from './R4_1_ValueSet_Designation'

export class R4_1_ValueSet_Contains      extends R4_1_BackboneElement
{

   static def : string = 'ValueSet_Contains';
   system : string ;
   abstract : boolean ;
   inactive : boolean ;
   version : string ;
   code : string ;
   display : string ;
   designation : R4_1_ValueSet_Designation [];
   contains : R4_1_ValueSet_Contains [];
}
