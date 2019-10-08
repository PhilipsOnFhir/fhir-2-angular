import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_DocumentReference_Content      extends R5_BackboneElement
{

   static def : string = 'DocumentReference_Content';
   attachment : R5_Attachment ;
   format : R5_Coding ;
}
