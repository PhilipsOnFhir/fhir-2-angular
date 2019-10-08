import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_Device_DeviceName } from './R4_Device_DeviceName'
import { R4_Device_Property } from './R4_Device_Property'
import { R4_Device_Specialization } from './R4_Device_Specialization'
import { R4_Device_UdiCarrier } from './R4_Device_UdiCarrier'
import { R4_Device_Version } from './R4_Device_Version'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FHIRDeviceStatusEnum } from './R4_FHIRDeviceStatusEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_Device      extends R4_DomainResource
{

   static def : string = 'Device';
   identifier : R4_Identifier [];
   definition : R4_Reference ;
   udiCarrier : R4_Device_UdiCarrier [];
   status : R4_FHIRDeviceStatusEnum ;
   statusReason : R4_CodeableConcept [];
   distinctIdentifier : string ;
   manufacturer : string ;
   manufactureDate : string ;
   expirationDate : string ;
   lotNumber : string ;
   serialNumber : string ;
   deviceName : R4_Device_DeviceName [];
   modelNumber : string ;
   partNumber : string ;
   type : R4_CodeableConcept ;
   specialization : R4_Device_Specialization [];
   version : R4_Device_Version [];
   property : R4_Device_Property [];
   patient : R4_Reference ;
   owner : R4_Reference ;
   contact : R4_ContactPoint [];
   location : R4_Reference ;
   url : string ;
   note : R4_Annotation [];
   safety : R4_CodeableConcept [];
   parent : R4_Reference ;
}
