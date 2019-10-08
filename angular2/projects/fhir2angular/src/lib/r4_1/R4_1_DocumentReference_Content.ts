import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_DocumentReference_Content      extends R4_1_BackboneElement
{

   static def : string = 'DocumentReference_Content';
   attachment : R4_1_Attachment ;
   format : R4_1_Coding ;
}
