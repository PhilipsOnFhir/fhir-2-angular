import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ImagingStudy_Instance } from './R4_ImagingStudy_Instance'
import { R4_ImagingStudy_Performer } from './R4_ImagingStudy_Performer'
import { R4_Reference } from './R4_Reference'

export class R4_ImagingStudy_Series      extends R4_BackboneElement
{

   static def : string = 'ImagingStudy_Series';
   uid : string ;
   number : string ;
   modality : R4_Coding ;
   description : string ;
   numberOfInstances : string ;
   endpoint : R4_Reference [];
   bodySite : R4_Coding ;
   laterality : R4_Coding ;
   specimen : R4_Reference [];
   started : string ;
   performer : R4_ImagingStudy_Performer [];
   instance : R4_ImagingStudy_Instance [];
}
