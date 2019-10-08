import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_CodeSystem_Designation      extends R4_BackboneElement
{

   static def : string = 'CodeSystem_Designation';
   language : string ;
   use : R4_Coding ;
   value : string ;
}
