import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImagingObjectSelection_Frame } from './STU3_ImagingObjectSelection_Frame'

export class STU3_ImagingObjectSelection_Instance      extends STU3_BackboneElement
{

   static def : string = 'ImagingObjectSelection_Instance';
   sopClass : string ;
   uid : string ;
   url : string ;
   frame : STU3_ImagingObjectSelection_Frame [];
}
