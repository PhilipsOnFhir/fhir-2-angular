import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImagingExcerpt_Dicom2 } from './STU3_ImagingExcerpt_Dicom2'

export class STU3_ImagingExcerpt_Instance      extends STU3_BackboneElement
{

   static def : string = 'ImagingExcerpt_Instance';
   sopClass : string ;
   uid : string ;
   dicom : STU3_ImagingExcerpt_Dicom2 [];
   frameNumbers : string [];
}
