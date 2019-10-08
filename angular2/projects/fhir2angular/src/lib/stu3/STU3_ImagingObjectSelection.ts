import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImagingObjectSelection_Study } from './STU3_ImagingObjectSelection_Study'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImagingObjectSelection      extends STU3_DomainResource
{

   static def : string = 'ImagingObjectSelection';
   uid : string ;
   patient : STU3_Reference ;
   authoringTime : string ;
   author : STU3_Reference ;
   title : STU3_CodeableConcept ;
   description : string ;
   study : STU3_ImagingObjectSelection_Study [];
}
