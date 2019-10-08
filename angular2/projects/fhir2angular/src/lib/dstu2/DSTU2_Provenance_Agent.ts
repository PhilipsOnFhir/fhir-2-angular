import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Provenance_RelatedAgent } from './DSTU2_Provenance_RelatedAgent'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Provenance_Agent      extends DSTU2_BackboneElement
{

   static def : string = 'Provenance_Agent';
   role : DSTU2_Coding ;
   actor : DSTU2_Reference ;
   userId : DSTU2_Identifier ;
   relatedAgent : DSTU2_Provenance_RelatedAgent [];
}
