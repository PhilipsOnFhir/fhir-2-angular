import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ClaimResponse_Note      extends R4_BackboneElement
{

   static def : string = 'ClaimResponse_Note';
   number : string ;
   type : R4_Coding ;
   text : string ;
}
