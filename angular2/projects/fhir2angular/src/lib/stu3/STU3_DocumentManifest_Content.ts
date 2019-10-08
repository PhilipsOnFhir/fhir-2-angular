import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DocumentManifest_Content      extends STU3_BackboneElement
{

   static def : string = 'DocumentManifest_Content';
   pAttachment : STU3_Attachment ;
   pReference : STU3_Reference ;
}
