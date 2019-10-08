import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ImagingObjectSelection_Study } from './DSTU2_ImagingObjectSelection_Study'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ImagingObjectSelection      extends DSTU2_DomainResource
{

   static def : string = 'ImagingObjectSelection';
   uid : string ;
   patient : DSTU2_Reference ;
   title : DSTU2_CodeableConcept ;
   description : string ;
   author : DSTU2_Reference ;
   authoringTime : string ;
   study : DSTU2_ImagingObjectSelection_Study [];
}
