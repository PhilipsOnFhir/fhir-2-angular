import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'
import { R5_Signature } from './R5_Signature'

export class R5_Contract_Signer      extends R5_BackboneElement
{

   static def : string = 'Contract_Signer';
   type : R5_Coding ;
   party : R5_Reference ;
   signature : R5_Signature [];
}
