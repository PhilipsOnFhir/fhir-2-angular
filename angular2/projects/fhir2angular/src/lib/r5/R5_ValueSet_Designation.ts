import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ValueSet_Designation      extends R5_BackboneElement
{

   static def : string = 'ValueSet_Designation';
   language : string ;
   use : R5_Coding ;
   value : string ;
}
