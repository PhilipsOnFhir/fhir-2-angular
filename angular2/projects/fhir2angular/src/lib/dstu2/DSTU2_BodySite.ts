import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_BodySite      extends DSTU2_DomainResource
{

   static def : string = 'BodySite';
   patient : DSTU2_Reference ;
   identifier : DSTU2_Identifier [];
   code : DSTU2_CodeableConcept ;
   modifier : DSTU2_CodeableConcept [];
   description : string ;
   image : DSTU2_Attachment [];
}
