import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImagingStudy_Instance } from './STU3_ImagingStudy_Instance'
import { STU3_InstanceAvailabilityEnum } from './STU3_InstanceAvailabilityEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImagingStudy_Series      extends STU3_BackboneElement
{

   static def : string = 'ImagingStudy_Series';
   uid : string ;
   number : string ;
   modality : STU3_Coding ;
   description : string ;
   numberOfInstances : string ;
   availability : STU3_InstanceAvailabilityEnum ;
   endpoint : STU3_Reference [];
   bodySite : STU3_Coding ;
   laterality : STU3_Coding ;
   started : string ;
   performer : STU3_Reference [];
   instance : STU3_ImagingStudy_Instance [];
}
