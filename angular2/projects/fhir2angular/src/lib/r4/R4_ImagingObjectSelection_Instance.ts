import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ImagingObjectSelection_Frames } from './R4_ImagingObjectSelection_Frames'

export class R4_ImagingObjectSelection_Instance      extends R4_BackboneElement
{

   static def : string = 'ImagingObjectSelection_Instance';
   sopClass : string ;
   uid : string ;
   url : string ;
   frames : R4_ImagingObjectSelection_Frames [];
}
