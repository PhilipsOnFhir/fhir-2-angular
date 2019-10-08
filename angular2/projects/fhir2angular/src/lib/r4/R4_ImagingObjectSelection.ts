import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ImagingObjectSelection_Study } from './R4_ImagingObjectSelection_Study'
import { R4_Reference } from './R4_Reference'

export class R4_ImagingObjectSelection      extends R4_DomainResource
{

   static def : string = 'ImagingObjectSelection';
   uid : string ;
   patient : R4_Reference ;
   title : R4_CodeableConcept ;
   description : string ;
   author : R4_Reference ;
   authoringTime : string ;
   study : R4_ImagingObjectSelection_Study [];
}
