import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ModuleMetadataResourceTypeEnum } from './STU3_ModuleMetadataResourceTypeEnum'

export class STU3_ModuleMetadata_RelatedResource      extends STU3_BackboneElement
{

   static def : string = 'ModuleMetadata_RelatedResource';
   type : STU3_ModuleMetadataResourceTypeEnum ;
   uri : string ;
   description : string ;
   document : STU3_Attachment ;
}
