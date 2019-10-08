import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ImagingObjectSelection_Series } from './DSTU2_ImagingObjectSelection_Series'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ImagingObjectSelection_Study      extends DSTU2_BackboneElement
{

   static def : string = 'ImagingObjectSelection_Study';
   uid : string ;
   url : string ;
   imagingStudy : DSTU2_Reference ;
   series : DSTU2_ImagingObjectSelection_Series [];
}
