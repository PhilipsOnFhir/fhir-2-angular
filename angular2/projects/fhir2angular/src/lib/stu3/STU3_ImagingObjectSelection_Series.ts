import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImagingObjectSelection_Instance } from './STU3_ImagingObjectSelection_Instance'

export class STU3_ImagingObjectSelection_Series      extends STU3_BackboneElement
{

   static def : string = 'ImagingObjectSelection_Series';
   uid : string ;
   url : string ;
   instance : STU3_ImagingObjectSelection_Instance [];
}
