import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_CodeSystem_Designation      extends STU3_BackboneElement
{

   static def : string = 'CodeSystem_Designation';
   language : string ;
   use : STU3_Coding ;
   value : string ;
}
