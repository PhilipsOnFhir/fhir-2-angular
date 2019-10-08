import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ImagingObjectSelection_Frames      extends DSTU2_BackboneElement
{

   static def : string = 'ImagingObjectSelection_Frames';
   frameNumbers : string [];
   url : string ;
}
