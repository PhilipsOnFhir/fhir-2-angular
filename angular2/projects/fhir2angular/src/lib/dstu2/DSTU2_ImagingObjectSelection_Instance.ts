import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ImagingObjectSelection_Frames } from './DSTU2_ImagingObjectSelection_Frames'

export class DSTU2_ImagingObjectSelection_Instance      extends DSTU2_BackboneElement
{

   static def : string = 'ImagingObjectSelection_Instance';
   sopClass : string ;
   uid : string ;
   url : string ;
   frames : DSTU2_ImagingObjectSelection_Frames [];
}
