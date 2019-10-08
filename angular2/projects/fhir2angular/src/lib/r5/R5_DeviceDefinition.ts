import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DeviceDefinition_Capability } from './R5_DeviceDefinition_Capability'
import { R5_DeviceDefinition_DeviceName } from './R5_DeviceDefinition_DeviceName'
import { R5_DeviceDefinition_Material } from './R5_DeviceDefinition_Material'
import { R5_DeviceDefinition_Property } from './R5_DeviceDefinition_Property'
import { R5_DeviceDefinition_Specialization } from './R5_DeviceDefinition_Specialization'
import { R5_DeviceDefinition_UdiDeviceIdentifier } from './R5_DeviceDefinition_UdiDeviceIdentifier'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ProdCharacteristic } from './R5_ProdCharacteristic'
import { R5_ProductShelfLife } from './R5_ProductShelfLife'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_DeviceDefinition      extends R5_DomainResource
{

   static def : string = 'DeviceDefinition';
   identifier : R5_Identifier [];
   udiDeviceIdentifier : R5_DeviceDefinition_UdiDeviceIdentifier [];
   manufacturerString : string ;
   manufacturerReference : R5_Reference ;
   deviceName : R5_DeviceDefinition_DeviceName [];
   modelNumber : string ;
   type : R5_CodeableConcept ;
   specialization : R5_DeviceDefinition_Specialization [];
   version : string [];
   safety : R5_CodeableConcept [];
   shelfLifeStorage : R5_ProductShelfLife [];
   physicalCharacteristics : R5_ProdCharacteristic ;
   languageCode : R5_CodeableConcept [];
   capability : R5_DeviceDefinition_Capability [];
   property : R5_DeviceDefinition_Property [];
   owner : R5_Reference ;
   contact : R5_ContactPoint [];
   url : string ;
   onlineInformation : string ;
   note : R5_Annotation [];
   quantity : R5_Quantity ;
   parentDevice : R5_Reference ;
   material : R5_DeviceDefinition_Material [];
}
