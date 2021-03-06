import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class TestScript_Capability      extends BackboneElement
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
