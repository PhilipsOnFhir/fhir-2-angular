import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_IdentifierUseEnum } from './R5_IdentifierUseEnum'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Identifier      extends R5_Element
{

   static def : string = 'Identifier';
   use : R5_IdentifierUseEnum ;
   type : R5_CodeableConcept ;
   system : string ;
   value : string ;
   period : R5_Period ;
   assigner : R5_Reference ;
}
