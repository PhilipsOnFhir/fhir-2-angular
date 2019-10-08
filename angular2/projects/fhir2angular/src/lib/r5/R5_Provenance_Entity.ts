import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ProvenanceEntityRoleEnum } from './R5_ProvenanceEntityRoleEnum'
import { R5_Provenance_Agent } from './R5_Provenance_Agent'
import { R5_Reference } from './R5_Reference'

export class R5_Provenance_Entity      extends R5_BackboneElement
{

   static def : string = 'Provenance_Entity';
   role : R5_ProvenanceEntityRoleEnum ;
   what : R5_Reference ;
   agent : R5_Provenance_Agent [];
}
