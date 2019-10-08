import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ModuleDefinition_Library      extends STU3_BackboneElement
{

   static def : string = 'ModuleDefinition_Library';
   name : string ;
   identifier : string ;
   version : string ;
   documentAttachment : STU3_Attachment ;
   documentReference : STU3_Reference ;
}
