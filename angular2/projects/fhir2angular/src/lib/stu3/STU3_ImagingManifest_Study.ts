import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImagingManifest_Series } from './STU3_ImagingManifest_Series'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImagingManifest_Study      extends STU3_BackboneElement
{

   static def : string = 'ImagingManifest_Study';
   uid : string ;
   imagingStudy : STU3_Reference ;
   endpoint : STU3_Reference [];
   series : STU3_ImagingManifest_Series [];
}
