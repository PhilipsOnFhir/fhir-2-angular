import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ValueSet_Designation } from './STU3_ValueSet_Designation'

export class STU3_ValueSet_Contains      extends STU3_BackboneElement
{

   static def : string = 'ValueSet_Contains';
   system : string ;
   abstract : boolean ;
   inactive : boolean ;
   version : string ;
   code : string ;
   display : string ;
   designation : STU3_ValueSet_Designation [];
   contains : STU3_ValueSet_Contains [];
}
