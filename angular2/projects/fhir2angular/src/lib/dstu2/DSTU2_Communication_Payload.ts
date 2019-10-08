import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Communication_Payload      extends DSTU2_BackboneElement
{

   static def : string = 'Communication_Payload';
   contentString : string ;
   contentAttachment : DSTU2_Attachment ;
   contentReference : DSTU2_Reference ;
}
