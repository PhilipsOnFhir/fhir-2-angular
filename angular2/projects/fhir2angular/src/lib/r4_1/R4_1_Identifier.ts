import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_IdentifierUseEnum } from './R4_1_IdentifierUseEnum'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Identifier      extends R4_1_Element
{

   static def : string = 'Identifier';
   use : R4_1_IdentifierUseEnum ;
   type : R4_1_CodeableConcept ;
   system : string ;
   value : string ;
   period : R4_1_Period ;
   assigner : R4_1_Reference ;
}
