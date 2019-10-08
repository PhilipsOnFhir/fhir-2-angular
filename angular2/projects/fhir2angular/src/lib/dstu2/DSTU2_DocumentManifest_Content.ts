import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DocumentManifest_Content      extends DSTU2_BackboneElement
{

   static def : string = 'DocumentManifest_Content';
   pAttachment : DSTU2_Attachment ;
   pReference : DSTU2_Reference ;
}
