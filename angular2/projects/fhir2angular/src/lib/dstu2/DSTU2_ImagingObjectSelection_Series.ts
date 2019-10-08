import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ImagingObjectSelection_Instance } from './DSTU2_ImagingObjectSelection_Instance'

export class DSTU2_ImagingObjectSelection_Series      extends DSTU2_BackboneElement
{

   static def : string = 'ImagingObjectSelection_Series';
   uid : string ;
   url : string ;
   instance : DSTU2_ImagingObjectSelection_Instance [];
}
