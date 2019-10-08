import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DocumentManifest_Related } from './R4_1_DocumentManifest_Related'
import { R4_1_DocumentReferenceStatusEnum } from './R4_1_DocumentReferenceStatusEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_DocumentManifest      extends R4_1_DomainResource
{

   static def : string = 'DocumentManifest';
   masterIdentifier : R4_1_Identifier ;
   identifier : R4_1_Identifier [];
   status : R4_1_DocumentReferenceStatusEnum ;
   type : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   created : string ;
   author : R4_1_Reference [];
   recipient : R4_1_Reference [];
   source : string ;
   description : string ;
   content : R4_1_Reference [];
   related : R4_1_DocumentManifest_Related [];
}
