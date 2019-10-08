import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ValueSet_Include } from './R5_ValueSet_Include'

export class R5_ValueSet_Compose      extends R5_BackboneElement
{

   static def : string = 'ValueSet_Compose';
   lockedDate : string ;
   inactive : boolean ;
   include : R5_ValueSet_Include [];
   exclude : R5_ValueSet_Include [];
}
