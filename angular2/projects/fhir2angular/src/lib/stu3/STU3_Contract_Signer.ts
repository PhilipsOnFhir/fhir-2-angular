import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Signature } from './STU3_Signature'

export class STU3_Contract_Signer      extends STU3_BackboneElement
{

   static def : string = 'Contract_Signer';
   type : STU3_Coding ;
   party : STU3_Reference ;
   signature : STU3_Signature [];
}
