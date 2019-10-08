import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_Signature } from './R4_Signature'

export class R4_Contract_Signer      extends R4_BackboneElement
{

   static def : string = 'Contract_Signer';
   type : R4_Coding ;
   party : R4_Reference ;
   signature : R4_Signature [];
}
