import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImagingObjectSelection_Series } from './STU3_ImagingObjectSelection_Series'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImagingObjectSelection_Study      extends STU3_BackboneElement
{

   static def : string = 'ImagingObjectSelection_Study';
   uid : string ;
   url : string ;
   imagingStudy : STU3_Reference ;
   series : STU3_ImagingObjectSelection_Series [];
}
