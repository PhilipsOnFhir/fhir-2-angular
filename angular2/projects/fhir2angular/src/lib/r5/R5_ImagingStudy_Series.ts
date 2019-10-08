import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ImagingStudy_Instance } from './R5_ImagingStudy_Instance'
import { R5_ImagingStudy_Performer } from './R5_ImagingStudy_Performer'
import { R5_Reference } from './R5_Reference'

export class R5_ImagingStudy_Series      extends R5_BackboneElement
{

   static def : string = 'ImagingStudy_Series';
   uid : string ;
   number : string ;
   modality : R5_Coding ;
   description : string ;
   numberOfInstances : string ;
   endpoint : R5_Reference [];
   bodySite : R5_Coding ;
   laterality : R5_Coding ;
   specimen : R5_Reference [];
   started : string ;
   performer : R5_ImagingStudy_Performer [];
   instance : R5_ImagingStudy_Instance [];
}
