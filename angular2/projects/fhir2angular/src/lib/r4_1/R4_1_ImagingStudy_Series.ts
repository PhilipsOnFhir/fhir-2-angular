import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ImagingStudy_Instance } from './R4_1_ImagingStudy_Instance'
import { R4_1_ImagingStudy_Performer } from './R4_1_ImagingStudy_Performer'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ImagingStudy_Series      extends R4_1_BackboneElement
{

   static def : string = 'ImagingStudy_Series';
   uid : string ;
   number : string ;
   modality : R4_1_Coding ;
   description : string ;
   numberOfInstances : string ;
   endpoint : R4_1_Reference [];
   bodySite : R4_1_Coding ;
   laterality : R4_1_Coding ;
   specimen : R4_1_Reference [];
   started : string ;
   performer : R4_1_ImagingStudy_Performer [];
   instance : R4_1_ImagingStudy_Instance [];
}
