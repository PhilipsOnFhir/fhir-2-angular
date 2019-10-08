import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ExpansionProfile_Designation2      extends STU3_BackboneElement
{

   static def : string = 'ExpansionProfile_Designation2';
   language : string ;
   use : STU3_Coding ;
}
