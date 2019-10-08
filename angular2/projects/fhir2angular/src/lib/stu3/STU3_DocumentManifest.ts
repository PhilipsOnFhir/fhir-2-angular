import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DocumentManifest_Content } from './STU3_DocumentManifest_Content'
import { STU3_DocumentManifest_Related } from './STU3_DocumentManifest_Related'
import { STU3_DocumentReferenceStatusEnum } from './STU3_DocumentReferenceStatusEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DocumentManifest      extends STU3_DomainResource
{

   static def : string = 'DocumentManifest';
   masterIdentifier : STU3_Identifier ;
   identifier : STU3_Identifier [];
   status : STU3_DocumentReferenceStatusEnum ;
   type : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   created : string ;
   author : STU3_Reference [];
   recipient : STU3_Reference [];
   source : string ;
   description : string ;
   content : STU3_DocumentManifest_Content [];
   related : STU3_DocumentManifest_Related [];
}
