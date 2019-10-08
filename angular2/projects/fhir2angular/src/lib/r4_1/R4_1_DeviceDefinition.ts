import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DeviceDefinition_Capability } from './R4_1_DeviceDefinition_Capability'
import { R4_1_DeviceDefinition_DeviceName } from './R4_1_DeviceDefinition_DeviceName'
import { R4_1_DeviceDefinition_Material } from './R4_1_DeviceDefinition_Material'
import { R4_1_DeviceDefinition_Property } from './R4_1_DeviceDefinition_Property'
import { R4_1_DeviceDefinition_Specialization } from './R4_1_DeviceDefinition_Specialization'
import { R4_1_DeviceDefinition_UdiDeviceIdentifier } from './R4_1_DeviceDefinition_UdiDeviceIdentifier'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ProdCharacteristic } from './R4_1_ProdCharacteristic'
import { R4_1_ProductShelfLife } from './R4_1_ProductShelfLife'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_DeviceDefinition      extends R4_1_DomainResource
{

   static def : string = 'DeviceDefinition';
   identifier : R4_1_Identifier [];
   udiDeviceIdentifier : R4_1_DeviceDefinition_UdiDeviceIdentifier [];
   manufacturerString : string ;
   manufacturerReference : R4_1_Reference ;
   deviceName : R4_1_DeviceDefinition_DeviceName [];
   modelNumber : string ;
   type : R4_1_CodeableConcept ;
   specialization : R4_1_DeviceDefinition_Specialization [];
   version : string [];
   safety : R4_1_CodeableConcept [];
   shelfLifeStorage : R4_1_ProductShelfLife [];
   physicalCharacteristics : R4_1_ProdCharacteristic ;
   languageCode : R4_1_CodeableConcept [];
   capability : R4_1_DeviceDefinition_Capability [];
   property : R4_1_DeviceDefinition_Property [];
   owner : R4_1_Reference ;
   contact : R4_1_ContactPoint [];
   url : string ;
   onlineInformation : string ;
   note : R4_1_Annotation [];
   quantity : R4_1_Quantity ;
   parentDevice : R4_1_Reference ;
   material : R4_1_DeviceDefinition_Material [];
}
