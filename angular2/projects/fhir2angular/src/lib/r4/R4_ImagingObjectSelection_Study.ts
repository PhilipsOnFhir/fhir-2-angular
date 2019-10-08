import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ImagingObjectSelection_Series } from './R4_ImagingObjectSelection_Series'
import { R4_Reference } from './R4_Reference'

export class R4_ImagingObjectSelection_Study      extends R4_BackboneElement
{

   static def : string = 'ImagingObjectSelection_Study';
   uid : string ;
   url : string ;
   imagingStudy : R4_Reference ;
   series : R4_ImagingObjectSelection_Series [];
}
