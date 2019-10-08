import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_Device_DeviceName } from './R4_1_Device_DeviceName'
import { R4_1_Device_Property } from './R4_1_Device_Property'
import { R4_1_Device_Specialization } from './R4_1_Device_Specialization'
import { R4_1_Device_UdiCarrier } from './R4_1_Device_UdiCarrier'
import { R4_1_Device_Version } from './R4_1_Device_Version'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FHIRDeviceStatusEnum } from './R4_1_FHIRDeviceStatusEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Device      extends R4_1_DomainResource
{

   static def : string = 'Device';
   identifier : R4_1_Identifier [];
   definition : R4_1_Reference ;
   udiCarrier : R4_1_Device_UdiCarrier [];
   status : R4_1_FHIRDeviceStatusEnum ;
   statusReason : R4_1_CodeableConcept [];
   distinctIdentifier : string ;
   manufacturer : string ;
   manufactureDate : string ;
   expirationDate : string ;
   lotNumber : string ;
   serialNumber : string ;
   deviceName : R4_1_Device_DeviceName [];
   modelNumber : string ;
   partNumber : string ;
   type : R4_1_CodeableConcept ;
   specialization : R4_1_Device_Specialization [];
   version : R4_1_Device_Version [];
   property : R4_1_Device_Property [];
   patient : R4_1_Reference ;
   owner : R4_1_Reference ;
   contact : R4_1_ContactPoint [];
   location : R4_1_Reference ;
   url : string ;
   note : R4_1_Annotation [];
   safety : R4_1_CodeableConcept [];
   parent : R4_1_Reference ;
}
