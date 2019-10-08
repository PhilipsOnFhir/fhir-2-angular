import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ProvenanceEntityRoleEnum } from './DSTU2_ProvenanceEntityRoleEnum'
import { DSTU2_Provenance_Agent } from './DSTU2_Provenance_Agent'

export class DSTU2_Provenance_Entity      extends DSTU2_BackboneElement
{

   static def : string = 'Provenance_Entity';
   role : DSTU2_ProvenanceEntityRoleEnum ;
   type : DSTU2_Coding ;
   reference : string ;
   display : string ;
   agent : DSTU2_Provenance_Agent ;
}
