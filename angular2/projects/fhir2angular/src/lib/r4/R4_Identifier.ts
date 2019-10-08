import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_IdentifierUseEnum } from './R4_IdentifierUseEnum'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Identifier      extends R4_Element
{

   static def : string = 'Identifier';
   use : R4_IdentifierUseEnum ;
   type : R4_CodeableConcept ;
   system : string ;
   value : string ;
   period : R4_Period ;
   assigner : R4_Reference ;
}
