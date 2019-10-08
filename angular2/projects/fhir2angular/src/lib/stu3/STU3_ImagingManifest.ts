import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ImagingManifest_Study } from './STU3_ImagingManifest_Study'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImagingManifest      extends STU3_DomainResource
{

   static def : string = 'ImagingManifest';
   identifier : STU3_Identifier ;
   patient : STU3_Reference ;
   authoringTime : string ;
   author : STU3_Reference ;
   description : string ;
   study : STU3_ImagingManifest_Study [];
}
