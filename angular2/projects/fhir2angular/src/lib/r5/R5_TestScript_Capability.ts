import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_TestScript_Capability      extends R5_BackboneElement
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
