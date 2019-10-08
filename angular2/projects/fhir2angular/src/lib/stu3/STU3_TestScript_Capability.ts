import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_TestScript_Capability      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Capability';
   required : boolean ;
   validated : boolean ;
   description : string ;
   origin : string [];
   destination : string ;
   link : string [];
   capabilities : STU3_Reference ;
}
