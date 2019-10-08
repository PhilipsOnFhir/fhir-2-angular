import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_CodeSystem_Designation      extends R4_1_BackboneElement
{

   static def : string = 'CodeSystem_Designation';
   language : string ;
   use : R4_1_Coding ;
   value : string ;
}
