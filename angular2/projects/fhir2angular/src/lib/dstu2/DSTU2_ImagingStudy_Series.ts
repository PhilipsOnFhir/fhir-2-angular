import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ImagingStudy_Instance } from './DSTU2_ImagingStudy_Instance'
import { DSTU2_InstanceAvailabilityEnum } from './DSTU2_InstanceAvailabilityEnum'

export class DSTU2_ImagingStudy_Series      extends DSTU2_BackboneElement
{

   static def : string = 'ImagingStudy_Series';
   number : string ;
   modality : DSTU2_Coding ;
   uid : string ;
   description : string ;
   numberOfInstances : string ;
   availability : DSTU2_InstanceAvailabilityEnum ;
   url : string ;
   bodySite : DSTU2_Coding ;
   laterality : DSTU2_Coding ;
   started : string ;
   instance : DSTU2_ImagingStudy_Instance [];
}
