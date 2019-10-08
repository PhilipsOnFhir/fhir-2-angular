import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ImagingStudy_Instance      extends DSTU2_BackboneElement
{

   static def : string = 'ImagingStudy_Instance';
   number : string ;
   uid : string ;
   sopClass : string ;
   type : string ;
   title : string ;
   content : DSTU2_Attachment [];
}
