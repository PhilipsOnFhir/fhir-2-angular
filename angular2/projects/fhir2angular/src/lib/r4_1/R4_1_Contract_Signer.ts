import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Signature } from './R4_1_Signature'

export class R4_1_Contract_Signer      extends R4_1_BackboneElement
{

   static def : string = 'Contract_Signer';
   type : R4_1_Coding ;
   party : R4_1_Reference ;
   signature : R4_1_Signature [];
}
