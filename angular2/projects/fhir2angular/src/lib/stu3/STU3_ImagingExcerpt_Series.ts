import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImagingExcerpt_Dicom1 } from './STU3_ImagingExcerpt_Dicom1'
import { STU3_ImagingExcerpt_Instance } from './STU3_ImagingExcerpt_Instance'

export class STU3_ImagingExcerpt_Series      extends STU3_BackboneElement
{

   static def : string = 'ImagingExcerpt_Series';
   uid : string ;
   dicom : STU3_ImagingExcerpt_Dicom1 [];
   instance : STU3_ImagingExcerpt_Instance [];
}
