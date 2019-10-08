import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImagingManifest_Instance } from './STU3_ImagingManifest_Instance'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImagingManifest_Series      extends STU3_BackboneElement
{

   static def : string = 'ImagingManifest_Series';
   uid : string ;
   endpoint : STU3_Reference [];
   instance : STU3_ImagingManifest_Instance [];
}
