import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DocumentManifest_Content } from './DSTU2_DocumentManifest_Content'
import { DSTU2_DocumentManifest_Related } from './DSTU2_DocumentManifest_Related'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DocumentManifest      extends DSTU2_DomainResource
{

   static def : string = 'DocumentManifest';
   masterIdentifier : DSTU2_Identifier ;
   identifier : DSTU2_Identifier [];
   subject : DSTU2_Reference ;
   recipient : DSTU2_Reference [];
   type : DSTU2_CodeableConcept ;
   author : DSTU2_Reference [];
   created : string ;
   source : string ;
   status : string ;
   description : string ;
   content : DSTU2_DocumentManifest_Content [];
   related : DSTU2_DocumentManifest_Related [];
}
