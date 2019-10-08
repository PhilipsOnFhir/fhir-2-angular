import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ValueSet_Include } from './R4_1_ValueSet_Include'

export class R4_1_ValueSet_Compose      extends R4_1_BackboneElement
{

   static def : string = 'ValueSet_Compose';
   lockedDate : string ;
   inactive : boolean ;
   include : R4_1_ValueSet_Include [];
   exclude : R4_1_ValueSet_Include [];
}
