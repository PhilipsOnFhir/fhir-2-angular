import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_IdentifierUseEnum } from './STU3_IdentifierUseEnum'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Identifier      extends STU3_Element
{

   static def : string = 'Identifier';
   use : STU3_IdentifierUseEnum ;
   type : STU3_CodeableConcept ;
   system : string ;
   value : string ;
   period : STU3_Period ;
   assigner : STU3_Reference ;
}
