import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ValueSet_Designation } from './R5_ValueSet_Designation'

export class R5_ValueSet_Contains      extends R5_BackboneElement
{

   static def : string = 'ValueSet_Contains';
   system : string ;
   abstract : boolean ;
   inactive : boolean ;
   version : string ;
   code : string ;
   display : string ;
   designation : R5_ValueSet_Designation [];
   contains : R5_ValueSet_Contains [];
}
