import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ModuleMetadataFocusTypeEnum } from './STU3_ModuleMetadataFocusTypeEnum'

export class STU3_ModuleMetadata_Coverage      extends STU3_BackboneElement
{

   static def : string = 'ModuleMetadata_Coverage';
   focus : STU3_ModuleMetadataFocusTypeEnum ;
   description : string ;
   value : STU3_CodeableConcept ;
}
