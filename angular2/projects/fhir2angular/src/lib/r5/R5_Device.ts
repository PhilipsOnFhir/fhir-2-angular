import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_Device_DeviceName } from './R5_Device_DeviceName'
import { R5_Device_Property } from './R5_Device_Property'
import { R5_Device_Specialization } from './R5_Device_Specialization'
import { R5_Device_UdiCarrier } from './R5_Device_UdiCarrier'
import { R5_Device_Version } from './R5_Device_Version'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FHIRDeviceStatusEnum } from './R5_FHIRDeviceStatusEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Device      extends R5_DomainResource
{

   static def : string = 'Device';
   identifier : R5_Identifier [];
   definition : R5_Reference ;
   udiCarrier : R5_Device_UdiCarrier [];
   status : R5_FHIRDeviceStatusEnum ;
   statusReason : R5_CodeableConcept [];
   distinctIdentifier : string ;
   manufacturer : string ;
   manufactureDate : string ;
   expirationDate : string ;
   lotNumber : string ;
   serialNumber : string ;
   deviceName : R5_Device_DeviceName [];
   modelNumber : string ;
   partNumber : string ;
   type : R5_CodeableConcept ;
   specialization : R5_Device_Specialization [];
   version : R5_Device_Version [];
   property : R5_Device_Property [];
   patient : R5_Reference ;
   owner : R5_Reference ;
   contact : R5_ContactPoint [];
   location : R5_Reference ;
   url : string ;
   note : R5_Annotation [];
   safety : R5_CodeableConcept [];
   parent : R5_Reference ;
}
