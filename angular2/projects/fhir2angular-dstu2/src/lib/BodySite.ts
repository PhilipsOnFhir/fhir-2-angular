import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class BodySite      extends DomainResource
{

   static def : string = 'BodySite';
   patient : Reference ;
   identifier : Identifier [];
   code : CodeableConcept ;
   modifier : CodeableConcept [];
   description : string ;
   image : Attachment [];
}
