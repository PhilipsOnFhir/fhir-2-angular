import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_DocumentReference_Content      extends R4_BackboneElement
{

   static def : string = 'DocumentReference_Content';
   attachment : R4_Attachment ;
   format : R4_Coding ;
}
