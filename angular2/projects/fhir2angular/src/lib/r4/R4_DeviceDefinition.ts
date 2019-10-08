import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DeviceDefinition_Capability } from './R4_DeviceDefinition_Capability'
import { R4_DeviceDefinition_DeviceName } from './R4_DeviceDefinition_DeviceName'
import { R4_DeviceDefinition_Material } from './R4_DeviceDefinition_Material'
import { R4_DeviceDefinition_Property } from './R4_DeviceDefinition_Property'
import { R4_DeviceDefinition_Specialization } from './R4_DeviceDefinition_Specialization'
import { R4_DeviceDefinition_UdiDeviceIdentifier } from './R4_DeviceDefinition_UdiDeviceIdentifier'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ProdCharacteristic } from './R4_ProdCharacteristic'
import { R4_ProductShelfLife } from './R4_ProductShelfLife'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_DeviceDefinition      extends R4_DomainResource
{

   static def : string = 'DeviceDefinition';
   identifier : R4_Identifier [];
   udiDeviceIdentifier : R4_DeviceDefinition_UdiDeviceIdentifier [];
   manufacturerString : string ;
   manufacturerReference : R4_Reference ;
   deviceName : R4_DeviceDefinition_DeviceName [];
   modelNumber : string ;
   type : R4_CodeableConcept ;
   specialization : R4_DeviceDefinition_Specialization [];
   version : string [];
   safety : R4_CodeableConcept [];
   shelfLifeStorage : R4_ProductShelfLife [];
   physicalCharacteristics : R4_ProdCharacteristic ;
   languageCode : R4_CodeableConcept [];
   capability : R4_DeviceDefinition_Capability [];
   property : R4_DeviceDefinition_Property [];
   owner : R4_Reference ;
   contact : R4_ContactPoint [];
   url : string ;
   onlineInformation : string ;
   note : R4_Annotation [];
   quantity : R4_Quantity ;
   parentDevice : R4_Reference ;
   material : R4_DeviceDefinition_Material [];
}
