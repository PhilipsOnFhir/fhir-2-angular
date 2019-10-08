import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DocumentManifest_Related } from './R4_DocumentManifest_Related'
import { R4_DocumentReferenceStatusEnum } from './R4_DocumentReferenceStatusEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_DocumentManifest      extends R4_DomainResource
{

   static def : string = 'DocumentManifest';
   masterIdentifier : R4_Identifier ;
   identifier : R4_Identifier [];
   status : R4_DocumentReferenceStatusEnum ;
   type : R4_CodeableConcept ;
   subject : R4_Reference ;
   created : string ;
   author : R4_Reference [];
   recipient : R4_Reference [];
   source : string ;
   description : string ;
   content : R4_Reference [];
   related : R4_DocumentManifest_Related [];
}
