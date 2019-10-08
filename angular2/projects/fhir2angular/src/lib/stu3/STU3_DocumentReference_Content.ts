import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_DocumentReference_Content      extends STU3_BackboneElement
{

   static def : string = 'DocumentReference_Content';
   attachment : STU3_Attachment ;
   format : STU3_Coding ;
}
