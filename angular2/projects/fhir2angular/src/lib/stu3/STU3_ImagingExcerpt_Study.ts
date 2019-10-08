import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImagingExcerpt_Dicom } from './STU3_ImagingExcerpt_Dicom'
import { STU3_ImagingExcerpt_Series } from './STU3_ImagingExcerpt_Series'
import { STU3_ImagingExcerpt_Viewable } from './STU3_ImagingExcerpt_Viewable'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImagingExcerpt_Study      extends STU3_BackboneElement
{

   static def : string = 'ImagingExcerpt_Study';
   uid : string ;
   imagingStudy : STU3_Reference ;
   dicom : STU3_ImagingExcerpt_Dicom [];
   viewable : STU3_ImagingExcerpt_Viewable [];
   series : STU3_ImagingExcerpt_Series [];
}
