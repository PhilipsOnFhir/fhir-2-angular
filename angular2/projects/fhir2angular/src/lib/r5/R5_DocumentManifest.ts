import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DocumentManifest_Related } from './R5_DocumentManifest_Related'
import { R5_DocumentReferenceStatusEnum } from './R5_DocumentReferenceStatusEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_DocumentManifest      extends R5_DomainResource
{

   static def : string = 'DocumentManifest';
   masterIdentifier : R5_Identifier ;
   identifier : R5_Identifier [];
   status : R5_DocumentReferenceStatusEnum ;
   type : R5_CodeableConcept ;
   subject : R5_Reference ;
   created : string ;
   author : R5_Reference [];
   recipient : R5_Reference [];
   source : string ;
   description : string ;
   content : R5_Reference [];
   related : R5_DocumentManifest_Related [];
}
