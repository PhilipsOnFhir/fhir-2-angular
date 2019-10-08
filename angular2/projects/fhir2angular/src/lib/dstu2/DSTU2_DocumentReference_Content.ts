import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_DocumentReference_Content      extends DSTU2_BackboneElement
{

   static def : string = 'DocumentReference_Content';
   attachment : DSTU2_Attachment ;
   format : DSTU2_Coding [];
}
