import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ValueSet_Include } from './STU3_ValueSet_Include'

export class STU3_ValueSet_Compose      extends STU3_BackboneElement
{

   static def : string = 'ValueSet_Compose';
   lockedDate : string ;
   inactive : boolean ;
   include : STU3_ValueSet_Include [];
   exclude : STU3_ValueSet_Include [];
}
