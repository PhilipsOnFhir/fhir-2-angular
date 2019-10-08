import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ProvenanceEntityRoleEnum } from './R4_1_ProvenanceEntityRoleEnum'
import { R4_1_Provenance_Agent } from './R4_1_Provenance_Agent'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Provenance_Entity      extends R4_1_BackboneElement
{

   static def : string = 'Provenance_Entity';
   role : R4_1_ProvenanceEntityRoleEnum ;
   what : R4_1_Reference ;
   agent : R4_1_Provenance_Agent [];
}
