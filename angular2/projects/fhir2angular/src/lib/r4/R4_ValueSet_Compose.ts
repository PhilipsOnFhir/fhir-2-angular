import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ValueSet_Include } from './R4_ValueSet_Include'

export class R4_ValueSet_Compose      extends R4_BackboneElement
{

   static def : string = 'ValueSet_Compose';
   lockedDate : string ;
   inactive : boolean ;
   include : R4_ValueSet_Include [];
   exclude : R4_ValueSet_Include [];
}
