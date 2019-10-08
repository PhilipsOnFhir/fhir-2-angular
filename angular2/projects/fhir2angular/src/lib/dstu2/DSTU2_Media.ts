import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DigitalMediaTypeEnum } from './DSTU2_DigitalMediaTypeEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Media      extends DSTU2_DomainResource
{

   static def : string = 'Media';
   type : DSTU2_DigitalMediaTypeEnum ;
   subtype : DSTU2_CodeableConcept ;
   identifier : DSTU2_Identifier [];
   subject : DSTU2_Reference ;
   operator : DSTU2_Reference ;
   view : DSTU2_CodeableConcept ;
   deviceName : string ;
   height : string ;
   width : string ;
   frames : string ;
   duration : string ;
   content : DSTU2_Attachment ;
}
