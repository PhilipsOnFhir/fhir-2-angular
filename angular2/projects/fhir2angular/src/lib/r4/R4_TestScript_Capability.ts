import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_TestScript_Capability      extends R4_BackboneElement
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
