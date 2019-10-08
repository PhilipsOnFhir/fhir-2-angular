import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_TestScript_Capability      extends R4_1_BackboneElement
{

   static def : string = 'TestScript_Capability';
   required : boolean ;
   validated : boolean ;
   description : string ;
   origin : string [];
   destination : string ;
   link : string [];
   capabilities : string ;
}
