import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ImagingObjectSelection_Instance } from './R4_ImagingObjectSelection_Instance'

export class R4_ImagingObjectSelection_Series      extends R4_BackboneElement
{

   static def : string = 'ImagingObjectSelection_Series';
   uid : string ;
   url : string ;
   instance : R4_ImagingObjectSelection_Instance [];
}
